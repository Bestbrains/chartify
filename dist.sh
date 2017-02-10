#!/bin/bash
mkdir -p dist

zip -9 -FS -q -r dist/chartify.zip . -x /examples* *.DS_Store* *dist.sh* *README.md* *LICENSE*
echo 'Wrote package dist/chartify.zip'
