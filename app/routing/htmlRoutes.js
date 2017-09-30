// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survery.html"));
	});

	app.get("*", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/style.css"));
	});
}
