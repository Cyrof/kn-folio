// // script to process json and download image 
// import fs from "fs";
// import path from "path";
// import https from "https";

// export const processJson = async () => {
//     const originalJsonPath = path.join(process.cwd(), "app", "data", "data.json");
//     const processJsonPath = path.join(process.cwd(), "app", "data", "processed-data.json");
//     const imageDir = path.join(process.cwd(), "public", "images");
//     const placeholderImagePath = '/images/placeholder.jpg';

//     // ensure images directory exists 
//     if (!fs.existsSync(imageDir)) {
//         fs.mkdirSync(imageDir, { recursive: true });
//     }

//     // read original json
//     // const originalData = JSON.parse(fs.readFileSync(originalJsonPath, 'utf-8'));
//     let originalData;
//     try{
//         originalData = JSON.parse(fs.readFileSync(originalJsonPath, "utf-8"));
//         // console.log("Original Date:", originalData);
//     } catch (err) {
//         console.error("Failed to read or parse data.json", err);
//         throw err;
//     }

//     if (!Array.isArray(originalData.projects)) {
//         throw new Error("`projects` key is missing or is not an array in data.json");
//     }

//     const newData = { ...originalData, projects: [] };

//     // process each project 
//     for (const project of originalData.projects) {
//         console.log("Inspecting project:", project);
//         const updatedProject = { ...project };

//         if (!project.url){
//             console.warn(`Project "${project.name}" is missing a URL.`);
//             updatedProject.url = placeholderImagePath;
//             newData.projects.push(updatedProject);
//             continue;
//         }

//         if (typeof project.url === "string" && project.url.includes("drive.google.com")) {
//             const fileId = new URL(project.url).searchParams.get("id");
//             if(!fileId) {
//                 console.error(`Invalid Google Drive URL for project "${project.name}": ${project.url}`);
//                 updatedProject.url = placeholderImagePath;
//                 newData.projects.push(updatedProject);
//                 continue;
//             }
        

//             const imageUrl = `https://drive.google.com/uc?id=${fileId}`;
//             const localImagePath = path.join(imageDir, `${fileId}.png`);
//             const publicImagePath = `/images/${fileId}.png`
    
//             try {
//                 if (!fs.existsSync(localImagePath)){
//                     // download the save the image
//                     await new Promise((resolve, reject) => {
//                         const fileStream = fs.createWriteStream(localImagePath);
//                         https.get(imageUrl, (response) => {
//                             response.pipe(fileStream);
//                             fileStream.on('finish', () => {
//                                 fileStream.close(resolve);
//                             });
//                         }).on('error', (err) => {
//                             reject(err);
//                         });
//                     });
//                 }
    
//                 updatedProject.url = publicImagePath;
//             } catch (err) {
//                 console.error(`Failed to download image for project "${project.name}":`, err);
//                 updatedProject.url = placeholderImagePath; // use placeholder on failure
//             }
//         } else {
//             console.log(`Invalid or missing Google Drive URL for project: ${project.name}`);
//             updatedProject.url = placeholderImagePath;
//         }
    
//         // add updated project to new json 
//         newData.projects.push(updatedProject);
//     }


//     // save the new json 
//     try {
//         fs.writeFileSync(processJsonPath, JSON.stringify(newData, null, 2));
//         console.log(`Processed JSON saved to ${processJsonPath}`);
//     } catch (err) {
//         console.error("Failed to write processed-data.json:", err);
//     }
// };

import fs from "fs";
import path from "path";
import https from "https";

export const processJson = async () => {
    const originalJsonPath = path.join(process.cwd(), "app", "data", "data.json");
    const processJsonPath = path.join(process.cwd(), "app", "data", "process-data.json")
    const imageDir = path.join(process.cwd(), "public", "images");
    const placeholderImagePath = '/images/placeholder.png';

    // check image directory exists 
    if (!fs.existsSync(imageDir)){
        fs.mkdirSync(imageDir, { recursive: true });
    }

    // read original json 
    let originalData; 
    try{ 
        originalData = JSON.parse(fs.readFileSync(originalJsonPath, 'utf-8'));
        console.log("Original Data Read.");
    } catch (err){ 
        console.error("Failed to need or parse data.json", err);
        throw err;
    }

    const newData = { ...originalData, projects: [] };

    for (const project of originalData.projects){
        console.log("Inspecting project: ", project)
        const updatedProject = { ...project };

        if (!project.url){
            console.warn(`Project "${project.name}" is missing a URL.`);
            updatedProject.url = placeholderImagePath;
            newData.project.push(updatedProject);
            continue;
        }

        if (typeof project.url === "string" || project.url.includes("drive.google.com")) {
            // const fileID = new URL(project.url).searchParams.get("id");
            // console.log(fileID);
            
        }
    }
}