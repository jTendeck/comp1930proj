let jsonData = ["Lundi"];
let htmlData = "<ul><li>Monday</li></ul>";

module.exports = {
	getHTML : function () {
	  console.log("called: getHTML");
	  return htmlData;
	},

	getJSON : function () {
	  console.log("called: getJSON");
	  return jsonData;
	}
}
