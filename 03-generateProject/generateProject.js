const fs = require("fs");
const path = require("path");

// Define the path to the project JSON file
const projectJsonPath = path.join(__dirname, "output", "updatedProject.json");

// Function to create directories and files
const createProjectFromJson = (projectData) => {
	try {
		// Iterate through the projectData object
		for (const [filePath, fileContent] of Object.entries(projectData)) {
			const fullPath = path.join(__dirname, filePath); // Absolute path to the file

			// Extract the directory from the file path
			const dirPath = path.dirname(fullPath);

			// Create the directory if it doesn't exist
			if (!fs.existsSync(dirPath)) {
				fs.mkdirSync(dirPath, { recursive: true });
				console.log(`Directory created: ${dirPath}`);
			}

			// Create or overwrite the file with the content
			fs.writeFileSync(fullPath, fileContent, "utf-8");
			console.log(`File created/updated: ${fullPath}`);
		}

		console.log("Project files have been created successfully!");
	} catch (error) {
		console.error("Error creating files:", error);
	}
};

// Read the project JSON file and parse its content
fs.readFile(projectJsonPath, "utf-8", (err, data) => {
	if (err) {
		console.error("Error reading project JSON file:", err);
		return;
	}

	// Parse the JSON data
	const projectFiles = JSON.parse(data);

	// Run the function to create the project
	createProjectFromJson(projectFiles);
});
