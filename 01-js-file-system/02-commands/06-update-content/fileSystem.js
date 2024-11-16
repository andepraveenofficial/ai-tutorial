// Import the File System (fs) module to work with files and directories
const fs = require("fs");

// Update File Content
fs.writeFile("fileName.txt", "Updated content", (err) => {
	// Attempt to overwrite the content of the file "fileName.txt" with "Updated content"
	if (err) {
		throw err; // Stop execution and show the error
	}
	console.log("File updated"); // Log success message if file is updated successfully
});
