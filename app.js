const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path');
const {
    flashMessage,
    notFound,
    downloadUrl
} = require('./src/middleware/index');

const app = express();
const port = process.env.PORT || 3000;


// setup route middlewares
    app.set('views','src/views');
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname,'/public')));
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(
        session({
            secret: 'unzip_online',
            resave: true,
            saveUninitialized: true,
            // cookie: { secure: true }
        })
    )
    app.use(flash());

    app.use(flashMessage,downloadUrl);
// end config

app.use('/',require('./src/routes/routes.js'));
app.use(notFound);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})