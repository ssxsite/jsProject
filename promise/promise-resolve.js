console.log("here we go");
Promise.resolve()
.then((value) => {
    console.log('step1:',value);
    return Promise.resolve('hello');
})
.then(value => {
    console.log('step2:',value);
    return Promise.resolve(new Promise(resolve => {
        setTimeout(() => {
            resolve('new promise');
        },2000)
    }))
})
.then(value => {
    console.log('step3:',value);
    return Promise.resolve({
        then() {
            console.log("ending----");
        }
    })
})