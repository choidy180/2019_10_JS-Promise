function  buyAsync(name ,mymoney) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let payment = parseInt(prompt("지불하고자 하는 금액 입력"));
            let balance = mymoney - payment;
            if (balance > 0){
                console.log(`${name}: ${payment}원을 지불했습니다. `)
                resolve(balance);
            } else {
                reject(`${name}: 잔액은 ${balance}원입니다. 구매할 수 없습니다`);
            }
        }, 1000)
    })
}
Promise.race([
    buyAsync("KIM", 500),
    buyAsync("MIN", 600),
    buyAsync("Seok", 1000)
])
.then (function (balcance) {
    console.log(balcance);
})
.catch(function(error) {
    console.log(error);
});