console.log("here we go");
let p1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('P1 resolve');
    },10000)
});
let p2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('P2 resolve');
    },2000)
});

Promise.race([p1,p2])
.then((value) => {
    console.log(value);
})