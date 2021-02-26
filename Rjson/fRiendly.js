
var J = require('./'+process.argv[2]);
var d = process.argv[3];
var t = process.argv[4];
//var ids = ['<whole match>','exchange','timestamp'];
//var capture_ids = /.+(amex|nysq|nasdaq)\-(\d{8}).csv/;
var ids = ['<whole match>','timestamp'];
var capture_ids = /.+(?:amex|nysq|nasdaq)\-(\d{8}).csv/;
var JQ = [];
for (var m in J) {
  K = J[m];
  captured = m.match(capture_ids);
  for (var n in K) {
    dict = K[n]
    if( Object.keys(dict).length>1 ){
      dict[ ids[1] ] = captured[1];
      //dict[ ids[2] ] = captured[2];
      JQ.push( dict );
    }
  }
}
console.log( JSON.stringify(JQ) );
//console.log( JQ );
