#!/bin/sh

re_name() {
    echo "Finishing $1.html"
    cd htmlout/pages
    mv subpage.html $1.html
    cd ../../
}

echo "Cleaning target directory..."
rm -rf ./htmlout/*

pug views/index.pug -o htmlout -P

pug views/pages/subpage.pug -o htmlout/pages -O '{contentTag: "networkservice"}' -P
re_name network-service 

pug views/pages/subpage.pug -o htmlout/pages -O '{contentTag: "applicationmarket"}' -P
re_name application-market

pug views/pages/subpage.pug -o htmlout/pages -O '{contentTag: "technicaltutorial"}' -P
re_name technical-tutorial

pug views/pages/subpage.pug -o htmlout/pages -O '{contentTag: "toolsuite"}' -P
re_name tool-suite

echo 'Copying assets...'
mkdir ./htmlout/assets
cp -r ./dist ./htmlout/assets

echo 'Copying fontawesome...'
cp -r ./font ./htmlout/assets

echo 'Copying image'
cp -r ./imgs ./htmlout/assets

replace() {
    sed -i 's/\/network-service/\/pages\/network-service.html/g' $1
    sed -i 's/\/application-market/\/pages\/application-market.html/g' $1
    sed -i 's/\/technical-tutorial/\/pages\/technical-tutorial.html/g' $1
    sed -i 's/\/tool-suite/\/pages\/tool-suite.html/g' $1
}

replace htmlout/index.html
for f in htmlout/pages/*.html; do
    replace $f
done
