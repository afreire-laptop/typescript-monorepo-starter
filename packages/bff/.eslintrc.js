module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  env: {
    jest: true
  },
  globals: {
    __non_webpack_require__: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  ignorePatterns: ['.eslintrc.js', '**/dist/**', '**/build/**'],
  rules: {
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-redeclare': 0,
    'no-console': 1,
    'no-unexpected-multiline': 'warn',
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'off',
    'new-cap': ['error', { capIsNew: false }],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true
      }
    ],
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-restricted-imports': [2, { patterns: ['**/../../**/*/src/**'] }]
  }
}
