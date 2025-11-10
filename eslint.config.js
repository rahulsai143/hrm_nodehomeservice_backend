module.exports = {
  ignores: [
    "node_modules/**",
    "dist/**"
  ],
  languageOptions: {
    ecmaVersion: 2021,
    globals: {
      process: true,
      __dirname: true
    }
  },
  rules: {
    "semi": ["error", "always"],
    "indent": ["error", 2]
  }
};
