import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      ".next/**/*",
      "dist/**/*",
      "build/**/*",
      "node_modules/**/*"
    ]
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      // Allow any type in specific cases where needed for libraries
      "@typescript-eslint/no-explicit-any": "off",
      // Allow require imports for bundled files
      "@typescript-eslint/no-require-imports": "off",
      // Allow this alias for bundled files
      "@typescript-eslint/no-this-alias": "off",
      // Allow unsafe function types for compatibility
      "@typescript-eslint/no-unsafe-function-type": "off",
      // Allow empty object types for compatibility
      "@typescript-eslint/no-empty-object-type": "off",
      // Allow wrapper object types
      "@typescript-eslint/no-wrapper-object-types": "off"
    }
  }
];

export default eslintConfig;
