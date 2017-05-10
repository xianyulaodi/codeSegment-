Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//日期计算函数  source 原始日期（必需），num 增减日期数,  format需返回的格式
function dateOpera(source,num,format){
	var t = Date.parse(source);
	//var num = num ? parseInt(num) : 0;
	var format = format || 'yyyy-MM-dd';
	var target = parseInt(t)+(num*1000*60*60*24);
	return new Date(target).Format(format);
}

//演示
var x = dateOpera('2014-07-08',-7,'yyyy-MM-dd');
console.log(x);
var x2 = dateOpera('2014-07-08',+7,'yyyy-MM-dd');
console.log(x2);
