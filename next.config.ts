import type { NextConfig } from "next";
import { RegisterShutdownHandlers } from "./server-shutdown";

RegisterShutdownHandlers()

const nextConfig: NextConfig = {
    /* config options here */
};

export default nextConfig;
