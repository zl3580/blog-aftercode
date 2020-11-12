#!/bin/bash
echo "开始部署后端代码"
npm run stop
git fetch --all  
git reset --hard origin/master
git pull 
cnpm install
npm run tsc
npm run start
echo "后端代码部署完成！"
