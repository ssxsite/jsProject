console.log("here we go");
new Promise(resolve => {
    setTimeout(() =>{
        resolve("hello")
    },2000)
}).then(value =>{
    console.log(value);
    console.log("test-------");
    (function () {
        return new Promise(resolve =>{
            setTimeout(()=>{
                console.log("ssx------");
                resolve("ssx");
            },2000)
        })
    }());
    // return false;
}).then(value => {
    console.log(value+"world");
})