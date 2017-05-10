//JS部分
//一个页面只有一个联动：

<script type="text/javascript" src="http://js.3conline.com/js/ztlib/zt_select.js"></script>
<script type="text/javascript">
//联动：
new zt.SelectN('data.js',{})//这里使用了默认参数
</script>




//一个页面有多个联动，数据不同

<script type="text/javascript" src="http://js.3conline.com/js/ztlib/zt_select.js"></script>
<script type="text/javascript">
//联动1：
new zt.SelectN('data.js',{})//这里使用了默认参数
//联动2：
new zt.SelectN('data2.js',{//这里使用自定义参数
	id:'select2',
	data:'data2'
})
</script>


//一个页面有多个联动，相同数据
<script type="text/javascript" src="http://js.3conline.com/js/ztlib/zt_select.js"></script>
<script type="text/javascript">
//2级联动：
new zt.SelectN('data.js',{},function () {
	//3级联动
	new zt.SelectN({
		id:'select1'
	});
	//4级联动, 最后一个“地址”在select外显式
	new zt.SelectN({
		id:'select2',
		outside:'addr'
	});
	//4级联动
	new zt.SelectN({
		id:'select3'
	});
	// 4级联动，最后一个select“地址”不用选
	new zt.SelectN({
		id:'select4',
		lastAuto:true
	});
	//4级联动，设置默认广东省
	new zt.SelectN({
		id:'select5',
		default_:['广东省'],
		lastAuto:true
	});
	//4级联动，设置默认广东省广州市
	new zt.SelectN({
		id:'select6',
		default_:['广东省','广州市'],
		lastAuto:true
	});
	//4级联动，设置默认广东省广州市,并且灰选
	new zt.SelectN({
		id:'select7',
		default_:['广东省','广州市'],
		disabled:true,
		lastAuto:true
	});
});
 
</script>
 