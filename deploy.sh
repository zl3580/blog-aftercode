npm run stop
git reset --hard origin/master
git clean -f
git pull
npm run tsc
npm run start