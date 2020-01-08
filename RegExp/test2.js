/*
    对分组的理解
* */
let str = "2020-01-08";
// str.replace(/(\d{4})-(\d{2})-(\d{2})/,'$2$3$1')
// console.log(str.replace(/(\d{4})-(\d{2})-(\d{2})/,'$2$3$1'))
console.log(str.replace(/(\d{4})-(\d{2})-(\d{2})/,'$2/$3/$1'))
console.log(str)
