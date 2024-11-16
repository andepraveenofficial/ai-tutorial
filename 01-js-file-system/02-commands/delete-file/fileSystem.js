// Import the File System (fs) module to work with files and directories
const fs = require("fs");

// Delete File
fs.unlink("fileName.txt", (err) => {
	// Attempt to delete the file named "fileName.txt"
	if (err) {
		throw err; // Stop execution and show the error
	}
	console.log("File deleted"); // Log success message if file is deleted successfully
});
