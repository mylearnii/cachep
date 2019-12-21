class TimeClear {
    constructor() {
        let timerout;
        let timerinterval
    }

    regular(targetHour = 0, min = 0, second = 0) {
        var nowTime, nowSeconds, nowHour, nowMin, nowmillis, targetmills, mmm
        nowTime = new Date()
        nowSeconds = nowTime.getSeconds()
        nowHour = nowTime.getHours()
        nowMin = nowTime.getMinutes()
        console.log(nowSeconds, nowMin, nowHour)
        //
        nowmillis = nowHour * 3600 * 1000 + nowMin * 60 * 1000 + nowSeconds * 1000
        targetmills = targetHour * 3600 * 1000 + min * 60 * 1000 + second * 1000
        //距离定点毫秒数
        mmm = nowmillis > targetmills ? 24 * 3600 * 1000 - nowmillis + targetmills : targetmills - nowmillis;
        return mmm
    }

    start(fn, h, m, s, ih, im, is) {
        this.timerout = setTimeout(()=>this.inter(fn,ih,im,is), this.regular(h, m, s)
        )
    }
    inter(fn,h,m,s){
        this.timerinterval = setInterval(fn,h * 3600 + m * 60 * 1000 + s * 1000)
    }
    stop(){
        clearInterval(this.timerinterval)
        clearTimeout(this.timerout)
    }

}
// let cc = new TimeClear();
// function ss(){
//     console.log('i-i-i')
// }
// //定时执行的任务，目标 时 分 秒 间隔 时 分 秒
// cc.start(ss,14,22,29,0,0,1)
// setTimeout(()=>cc.stop(),10000)
module.exports = TimeClear
