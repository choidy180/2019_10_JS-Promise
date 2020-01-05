function  buyAsync(mymoney) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let payment = parseInt(prompt("지불하고자 하는 금액 입력"));
            let balance = mymoney - payment;
            if (balance > 0){
                console.log(`${payment}원을 지불했습니다. `)
                resolve(balance);
            } else {
                reject(`잔액은 ${mymoney}원 입니다. 구매할 수 없습니다`);
            }
        }, 1000)
    })
}
buyAsync(50000)
.then(function(balance){
    console.log(`잔액은 ${balance}원 입니다.`);
    return buyAsync(balance);
})
.then(function(balance) {
    console.log(`잔액은 ${balance}원 입니다.`);
    return buyAsync(balance);
})