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

myPromise()
    .then(addFive)
    .then(muplityBy)
    .then(output)