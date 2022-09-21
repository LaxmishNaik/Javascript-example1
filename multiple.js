let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let N = parseInt(readLine());
if(N%2 != 0){
    let M = N*2;
    console.log(M);
}
else{
    console.log(N);
}

// let M = N *2;
// console.log(M);
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format