
// const promise = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         const randomNum = Math.round(Math.random());
//         const isActive = Boolean(randomNum);

//         if (isActive) {
//             resolve("Your Pizza is completed");
//         } else {
//             reject("Sorry, but your Pizza was damaged");
//         }
//     }, 1000)
    
// });

// // promise.then(onResolved, onRejected);

// // function onResolved(message) {
// //     console.log(message)
// //     console.log("GIVE ME A PIZZA");
// // }

// // function onRejected(message) {
// //     console.log(message);
// //     console.log("RETURN MY MONEY");
// // }

// promise
//     .then(message => {
//         console.log(message);
//         console.log("Give me a Pizza!");
//     })
//     .catch(message => {
//         console.log(message);
//         console.log("Give me a Money!");
//     })
//     .finally(() => {
//         setTimeout(() => {
//             console.log("Thank`s! Have a nice day!");    
//         }, 1500)
        
//     })

// ============== Промісифікація =================
    
function createPromise(value, delay, status) {
  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (status) {
            resolve(value);
        } else {
            reject(value);
        }
    }, delay)
    
  });
    return promise;    
}

const callPromise = createPromise("Hello1", 1000, true);

callPromise.then(onResolved).catch(onRejected);



function onResolved(message) {
    console.log(message)
    console.log("GIVE ME A PIZZA");
}

function onRejected(message) {
    console.log(message);
    console.log("RETURN MY MONEY");
}