let promise = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let name = prompt("이름을 입력하세요");
        resolve(name);
    }, 1000);
});
promise.then(function(name) {
    console.log("안녕하세요, " + name + " 님!");
})