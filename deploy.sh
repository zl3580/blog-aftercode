#!/bin/bash
cd 'C:\blog-zl-aftercode\blog-aftercode'
echo "开始了"
npm run stop
git pull
npm run tsc
npm run start
