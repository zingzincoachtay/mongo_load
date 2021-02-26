
//var format = require('./node_format')
require('./node_format')

// https://stackoverflow.com/a/18234317
// https://stackoverflow.com/a/32695337
var sel = `db.${t}.find( {"{col_by}":{ {oprnd}:{limit} }} ).limit(1)`;
console.log( sel.formatUnicorn({'col_by':'duration','oprnd':'$gt','limit':60*5}) );

var ct = `db.${t}.aggregate([ {"$group": {_id:"\${col_by}",count:{$sum:1}}} ])`;
console.log(  ct.formatUnicorn({'col_by':'TALB'}) );

