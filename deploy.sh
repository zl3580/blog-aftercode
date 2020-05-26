#!/bin/bash
cd 'C:\blog-zl-aftercode\blog-aftercode'
echo "Hello World !"
npm run stop
git pull
npm run tsc
npm run start
