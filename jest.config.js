module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue',
    'ts',
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|jsx?)$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/web-client/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/web-client/$1',
  },
}
