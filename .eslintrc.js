module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential',  // Lv1
    'plugin:vue/vue3-strongly-recommended',  // Lv2
    // 'plugin:vue/vue3-recommended',  // Lv3
    // js
    'eslint:recommend'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
      "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "never"
      }],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }]
  }
}