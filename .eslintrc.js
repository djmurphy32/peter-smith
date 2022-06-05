module.exports = {
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['./src/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'error',
      },
    },
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },

  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'standard',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
  rules: {
    'vue/html-self-closing': 0,
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': 'error',
    'no-useless-constructor': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    'standard/computed-property-even-spacing': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    'no-prototype-builtins': 'off',
    'no-use-before-define': 'off',
    'vue/max-len': [
      'error',
      {
        code: 200,
        ignoreHTMLAttributeValues: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-template-curly-in-string': 'off',
    'no-case-declarations': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase'],
        filter: {
          regex: '^\\$_',
          match: true,
        },
      },
    ],
    'no-unused-expressions': 0,
    '@typescript-eslint/no-empty-function': 0,
  },
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-vue', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
}
