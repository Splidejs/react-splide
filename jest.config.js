module.exports = {
  rootDir: './src',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  'transformIgnorePatterns': [
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
  globals: {
    'ts-jest': {
      tsconfig: './jest/tsconfig.json',
    },
  },
};
