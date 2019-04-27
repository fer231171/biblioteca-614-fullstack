if(process.env.NODE_ENV === 'development'){
require('dotenv').config();
}

console.log(process.env.NODE_ENV)

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//inicializacion
const app = express();
require('./database');

//seting
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/upload'), 
    filename(req,file,cb) {
        cb(null, new Date().getTime()+ path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//rutes
app.use('/api/books', require('./routes/books'));

//statics files

app.use(express.static(path.join(__dirname, 'public')));

//comenzar el servidor

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
})