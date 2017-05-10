Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //�·� 
        "d+": this.getDate(), //�� 
        "h+": this.getHours(), //Сʱ 
        "m+": this.getMinutes(), //�� 
        "s+": this.getSeconds(), //�� 
        "q+": Math.floor((this.getMonth() + 3) / 3), //���� 
        "S": this.getMilliseconds() //���� 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//���ڼ��㺯��  source ԭʼ���ڣ����裩��num ����������,  format�践�صĸ�ʽ
function dateOpera(source,num,format){
	var t = Date.parse(source);
	//var num = num ? parseInt(num) : 0;
	var format = format || 'yyyy-MM-dd';
	var target = parseInt(t)+(num*1000*60*60*24);
	return new Date(target).Format(format);
}

//��ʾ
var x = dateOpera('2014-07-08',-7,'yyyy-MM-dd');
console.log(x);
var x2 = dateOpera('2014-07-08',+7,'yyyy-MM-dd');
console.log(x2);
