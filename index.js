function getPrimes1(num){
    var arrayOfPrimes1 = [];
    var isPrime1 = function(y){
    for ( var i =2; i<=y; i++){
    if(y%i===0 && y===i){
      return true;
    }else if (y%i===0 && y!==i)
    return false;
  }
  return false;
  };
  for ( var y = 0 ; y<num ; y++){
      if(isPrime1(y)){
        arrayOfPrimes1.push(y);
      }
    }
    return arrayOfPrimes1;
  }
var num = 0;  
console.log("Hello World, the primes numbers before "+"\""+num+"\"are !");
console.log(getPrimes1(num));
