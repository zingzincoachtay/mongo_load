#!/usr/bin/python3
import json,sys;
t = 'id3v2'
keyword = 'filepath'
with open(sys.argv[1],encoding='utf8') as mongo:
  JQ = []
  J = json.load(mongo)
  for j in J:
    u = J[j]
    if len(u)>1 : 
      u.update({keyword:j});
      js = json.dumps(u)
      JQ.append( 'db.{}.insert({})'.format(t,js) )

print("""
db.dropDatabase()
use zin
""")
print( "\n".join(JQ) )

#https://stackoverflow.com/questions/5466451/how-can-i-print-literal-curly-brace-characters-in-python-string-and-also-use-fo

print( 'db.{}.find( {{"{}":{{ {}:{} }}}} ).limit(1)'.format(t,'duration','$gt',60*5) )

print( 'db.{}.aggregate([  {{"$group": {{_id:"${}",count:{{$sum:1}}}}}}  ])'.format(t,'TALB') )

#print('show dbs')

