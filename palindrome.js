let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let N = parseInt(readLine());
let temp = N;
let rev = 0;
while(N>0){
   let dig=num%10;
    rev=rev*10+dig;
    N=N/10;
}
if(temp == rev){
    console.log(true);
}
else{
    console.log(false);
}
    
   
    

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format