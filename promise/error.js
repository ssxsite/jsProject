console.log("here we go");
new Promise((resolve,reject) => {
    setTimeout(() =>{
        console.log("step 1");
        throw new Error('error------');
    },2000)
}).then(value =>{
    console.log("value-----",value);
},() =>{
    console.log("error2-----");
}).catch(error =>{
    console.log(error.message);
})