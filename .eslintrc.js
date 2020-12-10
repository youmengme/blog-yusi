module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    semi: 0,
    'comma-dangle': 2,
    'vue/order-in-components': 0,
    'vue/attributes-order': 0
  }
}
