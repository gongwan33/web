const {app} = require('./express');;

const {getLocaleStylePath} = require('./genLangUrls');


const PORT = 3000;

app.get(getLocaleStylePath('/'), (req, res) => {
    let locale = getLocale();
    res.render('index', {pageLocale: locale});
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});


