module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    es2021: true,
    browser: true,
    "jest/globals": true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint', 'jest'],
  settings: {
    'import/resolver': {
      node: {
        paths: ["src"],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.html'],
      plugins: ['html'],
      rules: {}
    }
  ],
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/class-methods-use-this': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.ts', '**/*.spec.ts', '@jest/globals', 'jest-preset-angular/setup-jest'],
    }],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    'import/namespace': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'linebreak-style': 'off',
    'no-console': 'off',
    'no-extra-parens': ['error', 'all'],
    'array-callback-return': 'error',
    curly: 'error',
    'default-case': 'warn',
    eqeqeq: ['error', 'always'],
    'guard-for-in': 'warn',
    'no-caller': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-new': 'warn',
    'no-trailing-spaces': 'off',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-useless-call': 'error',
    'no-undef-init': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'max-len': ['error', {code: 120, ignoreComments: true}],
    'new-cap': ['error', {newIsCap: true, capIsNew: false}],
    'new-parens': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    quotes: [
      'warn',
      'single',
      {avoidEscape: true, allowTemplateLiterals: true}
    ],
    'arrow-spacing': ['error', {before: true, after: true}],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-prototype-builtins': 'off',
    'no-var': 'warn',
    'no-unused-vars': ['error', {vars: 'local', args: 'none'}],
    'no-magic-numbers': ['warn', {ignore: [0, 1, -1]}],
    'class-methods-use-this': 'off'
  }
};
