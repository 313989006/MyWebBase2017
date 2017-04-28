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
function name() {
	
}
