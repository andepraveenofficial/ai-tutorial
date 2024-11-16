const fs = require("fs");
const path = require("path");

// Define the folder path
const folderPath = path.join(__dirname, "./"); // current directory

// Function to check the items in the folder
fs.readdir(folderPath, (err, files) => {
	if (err) {
		console.log("Error reading folder:", err);
		return;
	}

	console.log(files);

	// Iterate through the items in the folder
	files.forEach((file) => {
		const filePath = path.join(folderPath, file); // Full path of the item

		// Check if the item is a file or a folder
		fs.stat(filePath, (err, stats) => {
			if (err) {
				console.log("Error getting stats:", err);
				return;
			}

			if (stats.isDirectory()) {
				console.log(`${file} is a folder.`);
			} else if (stats.isFile()) {
				console.log(`${file} is a file.`);
			}
		});
	});
});
