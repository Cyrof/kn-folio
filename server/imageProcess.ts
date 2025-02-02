import fs from "fs";
import path from "path";
import axios from "axios";

const download = async (url: string, imagePath: string) => {
    const response = await axios({
        url, 
        method: 'GET',
        responseType: 'stream'
    });

    const writer = fs.createWriteStream(imagePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

export const processJson = async () => {
    const imageDir = path.join(process.cwd(), "public", "images");
    const placeholderImagePath = `images/placeholder.jpg`;
    const originalJsonPath = path.join(process.cwd(), "app", "data", "data.json");
    const processedJsonPath = path.join(process.cwd(), "app", "data", "processed-data.json");
    let index = 1;

    // check image dir
    if (!fs.existsSync(imageDir)){
        fs.mkdirSync(imageDir, { recursive: true });
    }

    // read original json 
    let originalData;
    try{ 
        originalData = JSON.parse(fs.readFileSync(originalJsonPath, 'utf-8'));
        console.log("Original Data Read.");
    } catch (err) {
        console.error("Failed to need or parse data.json", err);
        throw err;
    }

    const newData = { ...originalData, projects: [] };

    for (const project of originalData.projects){
        const updatedProject = { ...project };

        if (!project.url){
            console.warn(`Project "${project.name}" is missing a URL.`);
            updatedProject.url = placeholderImagePath;
            newData.projects.push(updatedProject);
            continue;
        }

        if (typeof project.url === "string" || project.url.includes("drive.google.com")){
            const fileId = `project_${index}.png`;
            const localImagePath = path.join(imageDir, fileId);
            const imagePath = `images/${fileId}`

            if (project.url === "None"){
                console.error(`Invalid URL for project "${project.name}": ${project.url}`);
                updatedProject.url = placeholderImagePath;
                newData.projects.push(updatedProject);
                continue;
            }

            try{
                if (!fs.existsSync(localImagePath)) {
                    download(project.url, localImagePath);
                    console.log(`Image downloaded: ${localImagePath}`);
                } else {
                    console.log(`Image already exists: ${localImagePath}`);
                }
                updatedProject.url = imagePath;
            } catch (err) {
                console.error(`Failed to download image for project "${project.name}":`, err);
                updatedProject.url = placeholderImagePath;
            }
        } else {
            console.log(`Invalid or missing Google Drive URL for project: ${project.name}`);
            updatedProject.url = placeholderImagePath;
        }
        index++;
        newData.projects.push(updatedProject);
    }

    try {
        fs.writeFileSync(processedJsonPath, JSON.stringify(newData, null, 2));
        console.log(`Processed JSON saved to ${processedJsonPath}`);
    } catch (err) {
        console.error("Failed to write processed-data.json", err);
    }
};