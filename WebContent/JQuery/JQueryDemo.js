/**
 * 
 */
/*function get_text() {
	var domObj = document.getElementById('txt');
	alert( document.getElementById('txt').value);
}*/
function get_text() {
	var jq = $("#txt");
	alert($("#txt").val());
}
//标签选择器
function divSelect() {
	$("div").css("border","1px solid red");  //一个参数表示的是获取，两个参数表示的是设置
	alert($("div").css("border"));
}
//通常使用选择器会返回一组元素，如果我们只想得到这一组元素中的第一个或者最后一个，可以使用:first或者:last
function firstSelect() {
	$('li:first').css('color','red');
	$('li:last').css('color','blue');
}

function containsSelect() {
	$('li:contains(to)').css('color','pink');
}
function indexSelect() {
	$('li:eq(2)').css('color','red');
}

function hasSelect() {
	$('li:has(span)').css('color','red');
}

	//隐藏过滤选择器
function hiddenSelect() {
	//$('p:hidden').show();
	$('p:visible').hide();
}

function classSelect() {
	$("input[id=pppe]").val("nice");
	$("input[name=txt]").val("meetyou");
}
//表单选择器,当<input>为radio或者checkbox时，通常需要查找具体哪些是被选中的
function formSelect() {
	console.log($('#my_form :input:checked'));
}

function formSelect2() {
	console.log($('#sel :selected'));
}

function attrDemo() {
	console.log($('#my_form1').attr('action'));
	$('#my_form1').attr('action', 'bar.js');
	console.log($('#my_form1').attr('action'));
}
//删除属性
function removeSelect() {
	$("img").removeAttr("src");
}

function htmlTextDemo() {
	//JQuery里，html()方法
	/*console.log($("p").html());  //没有参数表示获取
	$("p").html("<i>to meet you</i>");   //有参数表示设置
	console.log($("p").html());*/
	
	
	//JQuery里，text()方法
	console.log($("p").text());  //没有参数表示获取
	$("p").text("<i>to meet you</i>");   //有参数表示设置
	console.log($("p").text());
	
	//加下标，变成DOM对象，就不是构造函数，只能用innerText赋值
	/*console.log($("p")[2].innerText);  //没有参数表示获取
	$("p")[2].innerText = ("<i>to meet you</i>");   //有参数表示设置
	console.log($("p")[2].innerText);*/
	
	//JQuery里，html()方法，使用父子选择器，改变标签内容，如果是id选择器，就在p标签加id属性，然后用$("#p01").text()
	/*console.log($("p > b").text());  //没有参数表示获取
	$("p > b").text("<i>to meet you</i>");   //有参数表示设置
	console.log($("p")[2].innerText());*/
	
	/*//如果html中没有对应的标签属性值，得不到标签
	console.log($("#p03").html());  //没有参数表示获取
	$("#p03").html("<i>to meet you</i>");   //有参数表示设置
	console.log($("#p03").html());*/
}

//css()
function cssDemo() {
	//$("p").css("color","red");
	$("p")[2].style.color="blue";
}

//添加和删除class样式
function AddRemoveClass() {
	console.log(document.getElementById("p01"));
	$("#p01").addClass("test");
	console.log(document.getElementById("p01"));
}

//append在元素的尾部追加内容，prepend在元素的前面追加内容
function appendDemo() {
	//console.log(document.getElementById("p01"));
	$("#p01").append("########");
	$("#p01").prepend("++++++");
	//console.log(document.getElementById("p01"));
}

//在之前和之后插入文字，after(),before()
function afterBeforeDemo() {
	$("#p02").after("<p><b>fuck</b></p>");
	//$("#p02").before("<p><b>in love</b></p>");
}

//clone()
function cloneDemo() {
	var cp =$("#p03").clone();
	$("#p03").after(cp);
}

//replaceWith()
//用来将选择器选择到的元素整个替换成其他内容，如果仅仅使用html()或者text()，只能修改标签中的文本，而使用replaceWith是将整个标签替换成其他内容
function replaceWithDemo() {
	$("#p04").replaceWith("<b> 欢  迎  您</b>");
}

//wrap用来给某个元素外部再包围一对指定的标签
function wrapDemo() {
	$("#p04").wrap("<h1></h1>");
}

//wrapInner的作用是在元素内部包围一对标签,<I>表示是斜体
function wrapInnerDemo() {
	$("#p04").wrapInner("<I></I>");
}

//删除指定的标签
function removeDemo() {
	$("li").remove();
}

//清空一个标签内容
function emptyDemo() {
	$("body").empty();
}

//事件
$(function() {
	$("#btn").bind("click",function(){
		$(this).attr("disabled","true");
	})
	$("#username").bind("focus",function(){
		$(this).css("border","3pt solid red")
	}).bind("blur",function(){
		$(this).css("border","3pt solid yellow")
	})
	$("#btn2").mouseover(function(){
		$(this).val("mouseover - 已进入");
	})
	$("#btn2").mouseout(function(){
		$(this).val("mouseout - 已退出");
	})
	$("#btn").hover(function(){
		$(this).val("已进入");
	},function(){
		$(this).val(" 已退出 ");
	}
	)
})
