let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let m = parseInt(readLine());
let n = parseInt(readLine());
 if(m <= 0 && n <= 0){
        console.log(-1);
    }
   else if(m < 0){
        for(i = 0; i<=n; i++){
            console.log(i);
        }
    }
    else if(m > 0){
        for(let j = m; j<=n; j++){
            console.log(j);
        }
    }
    
    


// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format