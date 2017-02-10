#!/bin/bash
mkdir -p dist

zip -9 -FS -q -r dist/chartify.zip . -x /examples* /dist* *.DS_Store* *dist.sh* *README.md* *LICENSE* *.gitignore* /.git*
echo 'Wrote package dist/chartify.zip'
