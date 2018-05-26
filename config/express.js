const locales = ['zh', 'en'];
process.env.locales = locales;

const express = require('express');
const app = express();
const i18n = require("i18n");
const bodyParser = require('body-parser');
const {getGeneralLocaleStylePath} = require('./genLangUrls');

i18n.configure({
    locales: locales,
    directory: 'locales',
    register: global
});

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 

app.use('/assets', express.static('./'));

app.set('view engine', 'pug');
app.set('views', 'views/');

app.all(getGeneralLocaleStylePath('*'), (req, res, next) => {
    let lang = req.params.lang;

    if(locales.includes(lang)) {
        setLocale(lang);
        next();
    } else {
        i18n.init(req, res, next);
    } 

});

module.exports = {app};
