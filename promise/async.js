function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        },2000);
    });
}
/*用异步函数是这样写，所以async也是在promise的理解基础上使用的*/
async function f1() {
    let x  = await resolveAfter2Seconds(100);
    console.log(x);
}
f1();

/*用原来promise是这样写*/
resolveAfter2Seconds(100).then((value) => {
    console.log(value);
});