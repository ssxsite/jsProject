console.log("here we go");
new Promise((resolve,reject) => {
    setTimeout(() =>{
        console.log("step 1");
        resolve('hello');
    },2000)
}).then(value =>{
    console.log("value-----",value);
    throw new Error('error------');
},() =>{
    console.log("error2-----");
}).catch((error) => {
    console.log("error2---",error.message);
}).then(()=>{
    console.log("test1------");
}).then(()=>{
    console.log("test2------");
}).catch((error) => {
    console.log("error3---",error.message);
}).then(()=>{
    console.log("test3------");
})