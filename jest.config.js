module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'esbuild-jest',
  },
  testPathIgnorePatterns: ['dist'],
};
