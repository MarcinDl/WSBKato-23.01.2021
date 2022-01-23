////////////////////////////////////
////////////// zad 1 ///////////////
////////////////////////////////////

// function firstDelay() {
//     //ciało funkcji
//     return new Promise( (resolve,reject) =>{
//         setTimeout( () => {
//             console.log("jeden");
//             resolve();
//         },3000)
//     })
// }
// function secondDelay() {
//     return new Promise( (resolve,reject) =>{
//         setTimeout( () => {
//             console.log("dwa");
//         },6000)
//     })
// }
// function start() {
//     return new Promise( (resolve,reject) =>{
//         resolve();
//     })
// }
// start()
//     .then(firstDelay)
//     .then(secondDelay)


////////////////////////////////////
////////////// zad 2 ///////////////
////////////////////////////////////

// const news = 5;
// const myPromise = () => {
//     return new Promise(resolve => {
//         resolve(news);
//     })
// }
// const addFive = num => {
//     return num + 5;
// }
// const muplityBy = num => {
//     return num * 77;
// }

// const output = result => {
//     console.log(result)
// }

// myPromise()
//     .then(addFive)
//     .then(muplityBy)
//     .then(output)

////////////////////////////////////
////////////// zad 3 ///////////////
////////////////////////////////////

// w pierwszym promisie zmienną globalną powiększamy o pięć (promise ma trwać 5 sekund)
// w drugim promisie otrzymaną nową wartość (10) powiększamy o 20 (promise ma trwać 10 sekund)

// let news = 5;

// const firstDelay = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             news = news + 5;
//             resolve(news);
//         },5000)
//     })
// }

// const secondDelay = (fromFirstDelay) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             fromFirstDelay = fromFirstDelay + 20;
//             resolve(fromFirstDelay);
//         },10000)
//     })
// }

// const output = result => {
//     console.log(result);
// }

// firstDelay()
//     .then(secondDelay)
//     .then(output)

////////////////////////////////////
////////////// zad 4 ///////////////
////////////////////////////////////

const news = 5;
const myPromise = () => {
    return new Promise(resolve => {
        resolve(news);
    })
}
const addFive = num => {
    return num + 5;
}
const muplityBy = num => {
    return num * 77;
}

const output = result => {
    console.log(result)
}

async function wywolanie() {
    let zmienna1 = await myPromise();
    let zmienna2 = addFive(zmienna1)
    let zmienna3 = muplityBy(zmienna2)
    output(zmienna3)
}

wywolanie();