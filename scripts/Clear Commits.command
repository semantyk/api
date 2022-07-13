cd "/Users/danielbakas/Documents/Profesional/Semantyk/Projects/Semantyk/api"
cat .git/config > /dev/null 2>&1
rm -rf .git
git init > /dev/null 2>&1
git add .
git commit -m "Initial commit" > /dev/null 2>&1
git remote add origin https://github.com/semantyk/api
git push -u --force origin master
logout > /dev/null