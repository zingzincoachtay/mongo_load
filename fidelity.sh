#!/bin/bash
if [ -z $1  ]; then
  echo Must specify the directory to look for the dailies
  exit
fi
export w=$1

function mongo_da_exchange {
  export rec=$(echo $1 | tr [A-Z] [a-z])
  export jrec="m_$rec.json"
  if [ -e "$jrec" ]; then
    rm "$jrec"
  fi
  find $w -type f -name "$rec*" -exec sh ./csv2json.sh "{}" + > "$jrec"
  sed -i '1 i\{' "$jrec" && sed -i '$ a\}' "$jrec"
  node execute.mongo.js "$jrec" fidelity $rec > "$rec.mongo"
}

echo amex
mongo_da_exchange "amex"
echo nysq
mongo_da_exchange "nysq"
echo nasdaq
mongo_da_exchange "nasdaq"


