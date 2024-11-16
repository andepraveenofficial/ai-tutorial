// Import the File System (fs) module to work with files and directories
const fs = require("fs");

// Read File Content
fs.readFile("fileName.txt", "utf8", (err, data) => {
	// Attempt to read the content of the file "fileName.txt"
	if (err) {
		throw err;
	}
	console.log(data); // Log the file content
});
