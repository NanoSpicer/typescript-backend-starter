module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    ignorePatterns: [
      "*.js",
      "src/**/*.resolver.ts"
    ],
    extends: [
      'google',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      'ecmaVersion': 12,
      'sourceType': 'module',
    },
    plugins: [
      '@typescript-eslint',
    ],
    overrides: [
      {
        files: '*.ts',
        rules: {
          'require-jsdoc': 'off',
          'object-curly-spacing': ['warn', 'always'],
          'comma-dangle': ['error', 'never'],
          'no-underscore-dangle': 'off',
          'curly': 'off',
          'semi': 'off',
          'no-shadow': 'off',
          '@typescript-eslint/no-shadow': 'error',
          '@typescript-eslint/naming-convention': 'warn',
          '@typescript-eslint/member-ordering': 'warn',
          '@typescript-eslint/semi': 'off',
          'max-len': ['error', {
            code: 120,
            tabWidth: 2,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignorePattern: '^import .*',
          }],
          'quotes': ['error', 'single'],
          'no-tabs': 'error',
          'array-bracket-spacing': ['error', 'never'],
          'jsdoc/no-types': 'off',
          'no-unused-vars': 'off',
        }
      }
    ]
  };
  