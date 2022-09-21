let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let a = readLine();
let mind = 0;
if( a == '+'){
    mind = mind + 1;
    console.log(mind);
}
else if( a == '-'){
      mind = mind - 1;
      console.log(mind);
}
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format