const fs = require("fs");

fs.mkdir("folderName", (err) => {
	if (err) throw err;
	console.log("Folder created");
});
