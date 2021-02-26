// https://www.codementor.io/codementorteam/how-to-use-json-files-in-node-js-85hndqt32
// https://nodejs.org/docs/latest/api/process.html#process_process_argv
//var format = require('./node_format')
var J = require('./'+process.argv[2]);
var d = process.argv[3];
var t = process.argv[4];
var keyword = 'filepath';
var JQ = [];
// https://coderwall.com/p/_kakfa/javascript-iterate-through-object-keys-and-values
for (var m in J) {
  K = J[m];
  for (var n in K) {
    dict = K[n]
    if( Object.keys(dict).length>1 ){
      dict[keyword] = m;
      js = JSON.stringify(dict);
      JQ.push( `db.${t}.insert(${js})` );
    }
  }
}

console.log( `use ${d}` );
console.log( 'db.dropDatabase()' );
console.log( `use ${d}` );

console.log( JQ.join("\n") );

console.log('show dbs')

