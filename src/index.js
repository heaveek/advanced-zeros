module.exports = function getZerosCount(number, base) {
  function getMultiepler(base){
    let n = base;
    const nArr = [];
      if(n == 2){
        return n;
      } else {
          for(i = 2; i < n; i++) { 
            while(n % i == 0) {
              n /= i;  
            }			      
            if(n != 1) {
              nArr.push(n);
            }	else {
              nArr.push(base);
            }			
          } 
        }
      nArr.sort((a,b) => a-b);
      return nArr[0];
    }
  
  let countZero = 0;  
  for(let i = 1; number > Math.pow(getMultiepler(base), i); i++) {
    countZero += Math.floor(number / Math.pow(getMultiepler(base), i));
  }
  return countZero;  
}
