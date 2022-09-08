var targetTime = new Date("2022/8/14 00:00:04");
function share_data_time() {
	    //获取当前时间
	    today = new Date();
	    timeold = (today.getTime() - targetTime.getTime()); //总豪秒数
	    secondsold = Math.floor(timeold / 1000);          //总秒数
	    e_daysold = timeold / (24 * 60 * 60 * 1000);
	    daysold = Math.floor(e_daysold);                 //相差天数
	    e_hrsold = (e_daysold - daysold) * 24;
	    hrsold = Math.floor(e_hrsold);                   //相差小时数
	    e_minsold = (e_hrsold - hrsold) * 60;
	    minsold= Math.floor(e_minsold)                   //相差分钟数
	    seconds = Math.floor((e_minsold - minsold) * 60);  //相差秒数
	    return "" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
	}
var textThing = document.getElementById("time");
function updateWindow() {
	textThing.innerText=share_data_time();
}
var interval = setInterval(updateWindow, 500)
textThing.innerText=share_data_time();