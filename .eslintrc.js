module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'comma-dangle': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 0,
    'no-unused-vars': 1,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
  },
};
