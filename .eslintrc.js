/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
    "default-case": "off",
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
    "no-dupe-class-members": "off",
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
    "no-undef": "off",
    // Add TypeScript specific rules (and turn off ESLint equivalents)    
    "no-array-constructor": "off",    
    "no-redeclare": "off",    
    "no-use-before-define": "off",    
    "no-unused-expressions": "off",    
    "no-unused-vars": "off",    
    "no-useless-constructor": "off",    
    "react/jsx-uses-vars": "warn",
    "react/jsx-uses-react": "warn",
  },
};
