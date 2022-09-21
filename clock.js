let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let num1 = parseInt(readLine());
let num2 = parseInt(readLine());
let num3 = num1+num2;
if(num3>12){
    num4 = num3%10;
    num5 = num4 - 2;
    console.log(num5);
}
else{
    console.log(num3);
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format