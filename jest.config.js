module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "@vue/vue3-jest",
    // process `*.js` files with `babel-jest`
    ".*\\.(js)$": "babel-jest",
  },
};
