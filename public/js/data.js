let htmlData  = "<table><tr><th>Servings:</th><td>4</td></tr><tr><th>Calories:</th><td>200</td></tr><tr><th>Author:</th><td>Garry Goldberg</td></tr></table>";
let htmlData2 = "<table><tr><th>Servings:</th><td>8</td></tr><tr><th>Calories:</th><td>400</td></tr><tr><th>Author:</th><td>Jim Janson</td></tr></table>";
let htmlData3 = "<table><tr><th>Servings:</th><td>6</td></tr><tr><th>Calories:</th><td>Too Many</td></tr><tr><th>Author:</th><td>Harold \"The Rock\" Dingleberg</td></tr></table>";
let htmlData4 = "<table><tr><th>Servings:</th><td>10</td></tr><tr><th>Calories:</th><td>400</td></tr><tr><th>Author:</th><td>Tom Gi</td></tr></table>";
let htmlData5 = "<table><tr><th>Servings:</th><td>10</td></tr><tr><th>Calories:</th><td>1000</td></tr><tr><th>Author:</th><td>Joe Mitchberg</td></tr></table>";
let tableData = "<table><tr><th colspan=\"2\">Nutrition Info</th></tr><tr><th>Fat:</th><td>10 g</td></tr><tr><th>Protein:</th><td>20 g</td></tr><tr><th>Carbs:</th><td>30 g</td></tr></table>";
let tableData2 = "<table><tr><th colspan=\"2\">Nutrition Info</th></tr><tr><th>Fat:</th><td>40 g</td></tr><tr><th>Protein:</th><td>60 g</td></tr><tr><th>Carbs:</th><td>80 g</td></tr></table>";
let tableData3 = "<table><tr><th colspan=\"2\">Nutrition Info</th></tr><tr><th>Fat:</th><td>15 g</td></tr><tr><th>Protein:</th><td>25 g</td></tr><tr><th>Carbs:</th><td>35 g</td></tr></table>";
let tableData4 = "<table><tr><th colspan=\"2\">Nutrition Info</th></tr><tr><th>Fat:</th><td>17 g</td></tr><tr><th>Protein:</th><td>18 g</td></tr><tr><th>Carbs:</th><td>19 g</td></tr></table>";
let tableData5 = "<table><tr><th colspan=\"2\">Nutrition Info</th></tr><tr><th>Fat:</th><td>22 g</td></tr><tr><th>Protein:</th><td>62 g</td></tr><tr><th>Carbs:</th><td>34 g</td></tr></table>";

module.exports = {
	getHTML: function () {
	  console.log("called: getHTML");
	  return htmlData;
	},
	getHTML2: function () {
		console.log("called: getHTML2");
		return htmlData2;
	},
	getHTML3: function () {
		console.log("called: getHTML3");
		return htmlData3;
	},
	getHTML4: function () {
		console.log("called: getHTML4");
		return htmlData4;
	},
	getHTML5: function () {
		console.log("called: getHTML5");
		return htmlData5;
	},
	getTable1: function() {
		console.log("called: getTable1");
		return tableData;
	},
	getTable2: function() {
		console.log("called: getTable2");
		return tableData2;
	},
	getTable3: function() {
		console.log("called: getTable3");
		return tableData3;
	},
	getTable4: function() {
		console.log("called: getTable4");
		return tableData4;
	},
	getTable5: function() {
		console.log("called: getTable5");
		return tableData5;
	},

};


