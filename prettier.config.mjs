const config = {
    tabWidth: 4,
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    importOrder: [
        "<BUILTIN_MODULES>",
        "",
        "<THIRD_PARTY_MODULES>",
        "",
        "^@/(.*)$",
        "",
        "^[./]",
        "",
        "^(?!.*\\.css$)[./].*$",
        "\\.css$",
    ],
};

export default config;
