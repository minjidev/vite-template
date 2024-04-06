const vitest = require('eslint-plugin-vitest');

module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc.json',
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:vitest/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', '*.html'],
  plugins: ['prettier', 'react-refresh'],
  settings: {
    'import/resolver': {
      node: true,
    },
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-underscore-dangle': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  globals: {
    ...vitest.environments.env.globals,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'airbnb-typescript',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: true,
        },
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        '@typescript-eslint/no-shadow': 'off',
      },
    },
  ],
};
