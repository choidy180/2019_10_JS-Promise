# JS-Promise

프로미스는 자바스크립트 비동기 처리에 사용되는 객체

자바스크립트 비동기 처리 - "특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성"

+ 프로미스가 필요한 이유

비동기 처리를 실행하고 그 처리가 끝난 후에 다음 처리를 실행하기 위한 용도
Promise를 사용하려면 먼저 Promise 객체를 생성해야 한다. 

+ Promise 생성자의 사용법

    let promise = new Promise(function(resolve, reject) { ... } );

Promise에는 실행하고자 하는 처리를 작성한 함수를 인수로 넘긴다. 그리고 이 함수는 다음과 같은 인수를 받는다

resolve : 함수 안의 처리가 끝났을 때 호출해야 하는 콜백 함수, resolve 함수에는 어한 값도 인수로 넘길 수 있다
          이 값은 다음 처리를 실행하는 함수에 전달된다.
          
reject : 함수 안의 처리가 실패했을 때 호출해야 하는 콜백 함수, reject 함수에는 어떠한 값도 인수로 넘길 수 있다
         대부분의 경우 오류 메시지 문자열을 인수로 사용한다.


let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("A");
        resolve();
    }, 1000);
});
promise.then(function(){
    console.log("B");
});

위의 코드를 실행하면 1초후에 A가 표시되고 그 다음 B가 표시된다. 이 코드에서 Promise에 인수를 넘긴 함수는 비동기 처리를 수행하는 함수,
1초후에 "A"를 표시하고, 그 다음에는 함수 resolve를 호출해서  Promise 안의 처리를 종료시킨다 resolve 함수가 실행되면 then 메서드에
등록한 함수가 호출된다

# Promise를 종료시키는 resolve 함수와 then 메서드

resolve 함수는 Promise를 종료시킨다. resolve 함수에 인수로 넘긴 값은 then 메서드에 인수로 넘긴 함수에 전달되어
다음 처리를 위해 사용된다. then 메서드의 사용법은 다음과 같습니다

promise.then(onFullfilled);

onFullfilled 함수는 성공 콜백함수이며 이는 promise 안의 처리가 정상적으로 끝났을 때 호출되는 함수
onFullfilled 함수는 인수로 response 를 받고 이것은 promise 안에서 resolve 함수를 실행할 때 넘긴 인수

# Promise를 실패로 처리하는 reject 함수와 catch 메서드

reject 함수는 Promise를 종료시킨다. resolve 함수와 마찬가지로 reject 함수에도 값을 넘길 수있고 reject 함수가 실행되면
then 메서드에 넘긴 함수는 실행되지 않는다. 그 대신 catch 메서드에 넘긴 함수가 실행된다. catch 메서드의 사용법은 다음과 같다

promise.catch(onRejected);

onRejected 함수는 실패 콜백 함수라고 하며 promise 안의 처리가 실패로 끝났을 때 호출되는 함수이다. onRejected 함수는
인수로 error를 받으며 이것은 promise 안에서 reject 함수를 실행했을 때 넘긴 인수이다.

# then의 두 번째 인수 

then 메서드는 두  인수로 실패 콜백 함수를 지정, 그러면 then 메서드 에서 처리할 내용과 catch 메서드에서 처리할 내용을
then 메서드 하나로 작성할 수 있다, 두 번째 인수를 지정한 then 사용법은 다음과 같다

promise.then(onFullfilled, onRejected);

promise 안의 처리가 성공하면 onFullfilled 함수가 수행, 실패하면 onRejected 함수가 실행

# Promise가 실행하는 콜백 함수에 인수 넘기기

Promise가 실행하는 콜백 함수에 인수를 넘기려면 Promise 객체를 반환하는 함수를 정의해서 구현할 수 있다.



let promise = function(param){
    return new Promise(function(first, second){
        window.setTimeout(function() {
            if(param){
                first("해결완료");
            }
            else{
                reject(Error("실패!!"));
            }
        }, 3000);
    });
};
                          
undefined
promise(true)
.then(function(text){
    console.log(text);
}, function(error){
    console.error(error);
});
Promise {<pending>}


