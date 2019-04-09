console.log("here we go");

Promise.all([1,2,3])
    .then(all => {
        console.log("1:",all);
        return Promise.all([function () {
            console.log(('1122'));
        },'ssx',false]);
    })
    .then(all => {
        console.log('2:',all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m P1');
            },1500);
        });
        let p2 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m P2');
            },1500);
        });
        return Promise.all([p1,p2]);//一定要return 返回这个新的promise,值才能接受到
    })
    .then(all => {
        console.log('3:',all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m P1');
            },1500);
        });
        let p2 = new Promise((resolve,reject) => {
            setTimeout(() => {
                reject('I\'m P2');
                //throw new Error('I\'m P2');
            },1000);
        });
        let p3 = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('I\'m P3');
            },3000);
        });
        return Promise.all([p1,p2,p3]);
    }).then(all => {
    console.log('4:',all);
}).catch((error) => {
    console.log('Error:',error);
})
