/*假设我们要读取一堆文件的文件名字，并依次输出，实际情况可能读取文件的名字需要很多异步操作，这里简化*/
let arr = [{name:'name1'},{name:'name2'},{name:'name3'},{name:'name4'}];
let promises =  Promise.all(arr.map(file => {
    return new Promise((resolve,reject) =>{
        let success = true;
        if(success){
            resolve(file.name);
        }else {
            reject('Error');
        }

    });
}));
promises.then(all => {
    console.log('all:',all);
})
