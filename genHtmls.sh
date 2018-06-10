#!/bin/sh

re_name() {
    echo "Finishing $1.html"
    cd htmlout/pages
    mv subpage.html $1.html
    cd ../../
}

echo "Cleaning target directory..."
rm -r ./htmlout/*

pug views/index.pug -o htmlout -P

pug views/pages/subpage.pug -o htmlout/pages -O '{contentTag: "scrumtraining"}' -P
re_name scrumtraining

pug views/pages/subpage.pug -o htmlout/pages -O '{contentTag: "networkserviceconsulting"}' -P
re_name networkserviceconsulting

pug views/pages/subpage.pug -o htmlout/pages -O '{contentTag: "miscellaneous"}' -P
re_name miscellaneous

pug views/pages/subpage.pug -o htmlout/pages -O '{contentTag: "dorryplatform"}' -P
re_name dorryplatform 

echo 'Copying css...'
mkdir ./htmlout/css
cp -r ./dist/*.css ./htmlout/css/

echo 'Copying fontawesome...'
cp -r ./font ./htmlout/



