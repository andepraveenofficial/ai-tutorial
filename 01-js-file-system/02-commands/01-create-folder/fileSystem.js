// Import the File System (fs) module to work with files and directories
const fs = require("fs");

// Create Folder
fs.mkdir("folderName", (err) => {
	// Attempt to create a folder named "folderName"
	if (err) {
		// This error will occur if:
		// - The folder already exists
		// - The program doesn't have permission to create a folder
		// - The provided folder path is invalid
		throw err; // Stop execution and show the error
	}
	console.log("Folder created"); // Log success message if folder creation is successful
});
