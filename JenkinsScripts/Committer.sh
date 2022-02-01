#/bin/bash
git config user.name 'RTPablocs-Jenkins'
git config user.email 'conejerosorianopablo@gmail.com'
git remote set-url origin https://$1@github.com/RTPablocs/Jenkins_Final_Practice.git
git checkout master
git add README.md
git commit -a -m "Pipeline ejecutada por $2. Motivo: $3"
git push -u origin master
