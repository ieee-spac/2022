#!/bin/bash
npm run deploy;
BRANCH=$(git rev-parse --abbrev-ref HEAD);
git checkout main;
git branch -D gh-pages;
git branch -D prod;
git fetch;
git checkout gh-pages;
echo 'ieeespac.ca' > ../CNAME;
git checkout -b prod;
git add -A;
git commit -m "Production build $(date)";
git push origin prod --force;