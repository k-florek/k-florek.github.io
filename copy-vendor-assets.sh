#!/bin/sh

mkdir -p public/vendor/reveal
cp -r node_modules/reveal.js/dist public/vendor/reveal
mkdir -p public/vendor/reveal-plugins
cp -r node_modules/reveal.js/plugin public/vendor/reveal-plugins
cp -r node_modules/reveal.js-plugins public/vendor/reveal-plugins
mkdir -p public/vendor/jquery
cp -r node_modules/jquery/dist public/vendor/jquery