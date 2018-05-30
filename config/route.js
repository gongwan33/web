const {app} = require('./express');;

const {getLocaleStylePath} = require('./genLangUrls');


const PORT = 3000;

app.get(getLocaleStylePath('/'), (req, res) => {
    let locale = getLocale();
    res.render('index', {pageLocale: locale});
});

app.get(getLocaleStylePath('/scrum-training'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'scrumtraining'});
});

app.get(getLocaleStylePath('/network-service'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'networkserviceconsulting'});
});

app.get(getLocaleStylePath('/miscellaneous'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'miscellaneous'});
});

app.get(getLocaleStylePath('/dorry-platform'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'dorryplatform'});
});

app.get(getLocaleStylePath('/hiring'), (req, res) => {
    let locale = getLocale();
    res.render('pages/subpage', {pageLocale: locale, contentTag: 'hiring'});
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});


