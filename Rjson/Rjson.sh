
export of='transactions.json'

node fRiendly.js m_amex.json > $of

node fRiendly.js m_nasdaq.json >> $of

node fRiendly.js m_nysq.json >> $of

sed -i 's/^\[//' $of && sed -i 's/\]$//' $of 
sed -i '2,3s/^/,/' $of && sed -i '1 i\[' $of && sed -i '$ a\]' $of

### This part of Python will not fare well on raspberry pi
#python -c "import json;slist=json.load(open('transactions.json'));print json.dumps([i for n, i in enumerate(slist) if i not in slist[n + 1:]])" 

