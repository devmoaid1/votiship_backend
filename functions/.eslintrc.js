module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parserOptions: {
    sourceType: "module",

  },
  rules: {
    quotes: ["error", "double", "warn"],
    
  },
};
