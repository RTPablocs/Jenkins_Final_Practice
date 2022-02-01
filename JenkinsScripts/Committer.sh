#/bin/bash
git config user.name "RTPablocs"
git config user.email "conejerosorianopablo@gmail.com"
git add README.md
git commit -a -m "Pipeline ejecutada por $1. Motivo: $2"
git push -u origin master
