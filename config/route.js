const {app} = require('./express');;

const {getLocaleStylePath} = require('./genLangUrls');


const PORT = 3000;

app.get(getLocaleStylePath('/'), (req, res) => {
    let locale = getLocale();
    res.render('index', {pageLocale: locale});
});

app.get(getLocaleStylePath('/application-market'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'applicationmarket'});
});

app.get(getLocaleStylePath('/network-service'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'networkservice'});
});

app.get(getLocaleStylePath('/tool-suite'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'toolsuite'});
});

app.get(getLocaleStylePath('/technical-tutorial'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'technicaltutorial'});
});

app.get(getLocaleStylePath('/hiring'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'hiring'});
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});


