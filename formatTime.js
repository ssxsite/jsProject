/* 当天传入count = 0;前一天传入count = 1;最近7天传入count = 7;*/
function timeForMat (count) {
    // 拼接时间
    let time1 = new Date()
    time1.setTime(time1.getTime())
    let Y1 = time1.getFullYear()
    let M1 = ((time1.getMonth() + 1) > 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
    let D1 = (time1.getDate() > 10 ? time1.getDate() : '0' + time1.getDate())
    let H1 = time1.getHours()
    let m1 = time1.getMinutes()
    let S1 = time1.getSeconds()
    let timer1 = `${Y1}-${M1}-${D1}  ${H1}:${m1}:${S1}`// 当前时间
    let time2 = new Date()
    time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
    let Y2 = time2.getFullYear()
    let M2 = ((time2.getMonth() + 1) > 10 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
    let D2 = (time2.getDate() > 10 ? time2.getDate() : '0' + time2.getDate())
    let timer2 = `${Y2}-${M2}-${D2}  00:00:00`// 之前的7天或者30天
    return {
        t1: timer1,
        t2: timer2
    }
}
console.log(timeForMat(0));

