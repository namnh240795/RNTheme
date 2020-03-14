module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    extends: 'eslint-config-umi',
    rules: {
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
};
