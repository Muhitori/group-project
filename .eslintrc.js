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
    'class-methods-use-this': 0,
    'no-confusing-arrow': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'arrow-body-style': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-curly-newline': 0,
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'no-prototype-builtins': 0,
    'no-debugger': 0
  },
};
