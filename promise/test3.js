console.log("here we go");
let promise = new Promise(resolve => {
    setTimeout(() =>{
        resolve("hello");
        console.log("promise is fulfilled!")
    },1000)
});

setTimeout(()=>{
    promise.then(value=>{
        setTimeout(()=>{
            console.log(value+"world");
        },2000);
    })
})