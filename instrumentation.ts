// import { processJson } from "./server/imageProcess";

export async function register(){
    // process image 
    // try { 
    //     await processJson();
    //     console.log("Json Processing...");
    // } catch (err){
    //     console.error("Error Processing...", err);
    //     process.exit(1);
    // }

    // gracefully shutdown handlers 
    const shutdown = (signal: string) => {
        console.log(`Received ${signal}. Gracefully shutting down...`);
        process.exit(0);
    };

    process.on("SIGTERM", () => shutdown("SIGTERM")); // Docker stop sends this signal
    process.on("SIGINT", () => shutdown("SIGINT")); // Ctrl+C sends this signal
}