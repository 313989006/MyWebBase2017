/**
 * 
 */
function pDemo() {
	var len = navigator.plugins.length;
	with (document){
		write("你的浏览器共支持 " + len + "种外挂插件: <br>");
		write("<table border = 1>");
		write("<caption> 外挂清单</caption>")
		write("<tr><th><th> 名称 </th>描述</th>文件名</tr>")
		for (var i = 0; i < len; i++) {
			write("<tr><td> " + i + "<td>" + 
					navigator.plugins[i].name + "<td>" + navigator.plugins[i].description 
					+ "<td>" + navigator.plugins[i].filename);
		}
	}
}
function cfm(){
	if (confirm("确定离开吗?")) {
		self.close();
	}else {
		return false;
	}
}