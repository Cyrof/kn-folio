import type { NextConfig } from "next";
import { processJson } from "./app/utils/imageProcess";

const nextConfig: NextConfig = {
  /* config options here */
};

(async () => {
  try{
    await processJson();
    console.log("JSON processing complete.");
  } catch (error) {
    console.error("Error processing JSON:", error);
  }
})();

export default nextConfig;
