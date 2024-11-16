const path = require("path");
const fs = require("fs").promises; // Using promise-based fs

const projectPath = path.join(__dirname, "src");
console.log("📁 Reading directory:", projectPath);

// Read directory contents
const readFolder = async (folderPath) => {
	try {
		const files = await fs.readdir(folderPath);
		console.log("📝 Files found:", files);
		console.log("✅ Successfully read the Folder");
		return files;
	} catch (error) {
		console.error("❌ Error reading Folder:", error.message);
		throw error;
	}
};

/* 

readFolder(folderPath)
	.then((files) => {
		console.log("📊 Project contents:", files);
	})
	.catch((error) => {
		console.error("❌ Error:", error);
	});

*/

const project = {};

const readProject = async (folderPath) => {
	try {
		const files = await readFolder(folderPath);
		console.log("📊 Project contents:", files);

		for (let file of files) {
			const filePath = path.join(folderPath, file);
			const stats = await fs.stat(filePath);

			if (stats.isDirectory()) {
				console.log(`📁 Directory: ${file}`);
				await readProject(filePath);
			}

			if (stats.isFile()) {
				console.log(`📝 File: ${file}`);
				const content = await fs.readFile(filePath, "utf8");
				// project[filePath] = content;
				const relativePath = path.relative(__dirname, filePath);
				project[relativePath] = content;
			}
		}
		console.log("-------------");
	} catch (error) {
		console.error("❌ Error reading Project:", error.message);
	}
};

(async () => {
	try {
		// Read project
		await readProject(projectPath);
		console.log(project);

		// Check if output directory exists
		const outputPath = path.join(__dirname, "output");
		try {
			await fs.access(outputPath);
			console.log("output directory already exists");
		} catch {
			// Create directory only if it doesn't exist
			await fs.mkdir(outputPath);
			console.log("Created output directory");
		}

		// Write project file
		const outputFilePath = path.join(outputPath, "project.json");
		await fs.writeFile(
			outputFilePath,
			JSON.stringify(project, null, 2) // Added formatting for better readability
		);

		console.log("✅ Successfully wrote project.json");
	} catch (err) {
		console.error("❌ Error reading Project:", err.message);
		process.exit(1); // Exit with error code
	}
})();
