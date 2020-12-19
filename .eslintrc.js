module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Add your rules here
    'import/prefer-default-export': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'comma-dangle': ['error', 'never']
  }
};
