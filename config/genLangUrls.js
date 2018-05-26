let locales = process.env.locales;

if(locales && locales.length > 0) {
    locales = locales.split(',');
} else {
    locales = [];
}

function getGeneralLocaleStylePath(path) {
    let originPath = path;
    if(typeof path == "string") {
        path = path.replace(/\/$/, '');
    }

    return [path + '/:lang', originPath];
}

function getLocaleStylePath(path) {
    let originPath = path;
    let paths = [originPath];
    if(typeof path == "string") {
        path = path.replace(/\/$/, '');
    }

    locales.forEach(function(locale, idx) {
        let newPath = path + '/' + locale;
        paths.push(newPath); 
    });

    return paths;
}

module.exports = {
    getLocaleStylePath: getLocaleStylePath,
    getGeneralLocaleStylePath: getGeneralLocaleStylePath,
};
