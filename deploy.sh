#!/bin/bash
echo "开始了"
npm run stop
git fetch --all  
git reset --hard origin/master
git pull 
npm run tsc
npm run start
