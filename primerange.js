let isprime;
const primes=[1,2];
n = 200;
for(i = 3;i<=n;i=i+2){
    isprimenumber =true;
    for(let j=1;j<primes.length;j++){
        if(i % primes[j] ==0){
            isprimenumber =false;
            break;
        }
    }
    if(isprimenumber){
        primes[primes.length] =i
    }
}
console.log(primes);