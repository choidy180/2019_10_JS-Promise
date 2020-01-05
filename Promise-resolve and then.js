let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let n = parseInt(prompt("10보다 작은 숫자를 입력하세요"));
        if (n <= 10){
            resolve(n);
        } else {
            reject(`오류 : ${n}은 10 이상이다`);
        }
    }, 1000);
});
promise
.then(function(num) {
    console.log(`2^${num} = ${Math.pow(2,num)}`);
})
.catch(function(error) {
    console.log(error);
});
