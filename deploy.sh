#!/bin/bash
echo "开始部署后端代码"
npm run stop
git fetch --all  
git reset --hard origin/master
git pull 
npm run tsc
npm run start
