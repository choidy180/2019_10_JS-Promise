# JS-Promise

프로미스는 자바스크립트 비동기 처리에 사용되는 객체

자바스크립트 비동기 처리 - "특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성"

+ 프로미스가 필요한 이유

비동기 처리를 실행하고 그 처리가 끝난 후에 다음 처리를 실행하기 위한 용도
Promise를 사용하려면 먼저 Promise 객체를 생성해야 한다. 

Promise 생성자의 사용법

let promise = new Promise(function(resolve, reject) { ... } );

Promise에는 실행하고자 하는 처리를 작성한 함수를 인수로 넘긴다. 그리고 이 함수는 다음과 같은 인수를 받는다

resolve : 함수 안의 처리가 끝났을 때 호출해야 하는 콜백 함수, resolve 함수에는 어떤한 값도 인수로 넘길 수 있다
          이 값은 다음 처리를 실행하는 함수에 전달된다.
          
reject : 함수 안의 처리가 실패했을 때 호출해야 하는 콜백 함수, reject 함수에는 어떠한 값도 인수로 넘길 수 있다
         대부분의 경우 오류 메시지 문자열을 인수로 사용한다.
