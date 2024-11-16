// Import the File System (fs) module to work with files and directories
const fs = require("fs");

// Create File
fs.writeFile("fileName.txt", "File content", (err) => {
	// Attempt to create a file named "fileName.txt" and write "File content" into it
	if (err) {
		throw err;
	}
	console.log("File created"); // Log success message if file creation is successful
});
