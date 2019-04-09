console.log("here we go");
new Promise(resolve => {
    setTimeout(() =>{
        console.log("step 1");
        resolve(100)
    },2000)
}).then(value =>{
    console.log(value);
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("step 1-1");
            resolve(110);
        },2000)
    })
}).then((value)=>{
    console.log("step 1-2");
    return value;
}).then((value)=>{
    console.log("step 1-3");
    return value;
}).then(value => {
    console.log("step 2");
    console.log(value+"world");
})
