#/bin/bash
git checkout master
git add README.md
git commit -a -m "Pipeline ejecutada por $1. Motivo: $2"
git push -u origin master
