/*
    1.匹配连续【a-z】的三个字符,这三个字符必须在字符串开头
* */

let reg1 = /^[a-z][a-z][a-z]/;
let reg2 = /^[a-z]{3}/;
let reg3 = /[a-z]+/;
let str = "regex148";
console.log('1--------',str.match(reg1))
console.log('2--------',str.match(reg2))
console.log('3--------',str.match(reg3))
