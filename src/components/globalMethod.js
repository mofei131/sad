// 富文本处理
function showHtml(str){
		return str
			.replace(str ? /&(?!#?\w+;)/g : /&/g, '&amp;')
			.replace(/&lt;/g,"<")
			.replace(/&gt;/g,">")
			.replace(/&quot;/g,"\"")
			.replace(/&#39;/g, "\'")
			.replace(/&amp;nbsp;/g,'\u3000')
			.replace(/&amp;rdquo;/g,"\“")
			.replace(/&amp;ldquo;/g,"\”")
	}
export default {
	showHtml
}