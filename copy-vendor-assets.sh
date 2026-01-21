#!/bin/sh
set -e

echo "Copying vendor assets..."

mkdir -p public/vendor/reveal
cp -rL node_modules/reveal.js/dist/ public/vendor/reveal
echo "✓ Copied reveal.js"

mkdir -p public/vendor/reveal-plugins
cp -rL node_modules/reveal.js/plugin/ public/vendor/reveal-plugins
cp -rL node_modules/reveal.js-plugins/ public/vendor/reveal-plugins
echo "✓ Copied reveal.js plugins"

mkdir -p public/vendor/jquery
cp -rL node_modules/jquery/dist/ public/vendor/jquery
echo "✓ Copied jquery"

echo "All vendor assets copied successfully!"