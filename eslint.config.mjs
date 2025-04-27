import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),

    // global ignores
    {
        ignores: [".next/**", "node_modules/**"],
    },

    {
        rules: {
            indent: ["error", 4],
        },
    },

    {
        plugins: { import: importPlugin },
        settings: {
            "import/resolver": {
                typescript: {},
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
                    moduleDirectory: ["node_modules", "app"],
                },
            },
        },
    },

    // ignore build output
    { ignores: [".next/**", "node_modules/**"] },
];

export default eslintConfig;
