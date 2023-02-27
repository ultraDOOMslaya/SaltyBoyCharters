#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP dist/ root@139.144.61.131:/var/www/maakestad.dev/
echo "Deployment complete"