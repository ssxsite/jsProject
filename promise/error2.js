console.log("here we go");
new Promise((resolve,reject) => {
    setTimeout(() =>{
        console.log("step 1");
        reject("发送错误了");
    },2000)
}).then(value =>{
    console.log("value-----",value);
},(error) =>{
    console.log("Error",error);
})