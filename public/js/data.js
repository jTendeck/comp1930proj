let htmlData  = "<ul><li>Monday</li></ul>";
let htmlData2 = "<ul><li>This be here mon</li></ul>";

module.exports = {
	getHtml: function () {
	  console.log("called: getHTML");
	  return htmlData;
	},
	getHTML2: function () {
		console.log("called: getHTML2");
		return htmlData2;
	}
};


