import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: pluginReact,
            prettier,
        },
        extends: [
            js.configs.recommended,
            pluginReact.configs.flat.recommended,
            configPrettier,
        ],
        rules: {
            "react/react-in-jsx-scope": "off",
            "prettier/prettier": "error",
        },
    },
]);

