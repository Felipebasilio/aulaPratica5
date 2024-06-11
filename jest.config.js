module.exports = {
    verbose: true,
    moduleFileExtensions: [
        'js',
        'json',
        // tell Jest to handle `*.vue` files
        'vue',
    ],
    transform: {
        // process `*.vue` files with `vue-jest`
        '.*\\.(vue)$': 'vue-jest',
        // process `*.js` files with `babel-jest`
        '.*\\.(js)$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^#/(.*)$': '<rootDir>/tests/unit/$1',
        axios: 'axios/dist/node/axios.cjs',
    },
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
    silent: true
};