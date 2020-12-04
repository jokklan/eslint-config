module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'react-app',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'plugin:import/warnings',
    'plugin:import/errors',
    './eslintConfiguration/importOrder'
  ],
  plugins: ['react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    camelcase: ['error', { allow: ['^_[^_]+$'] }],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['result']
      }
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      // { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      // { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]},
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'any', prev: ['let', 'var'], next: 'multiline-block-like' },
      { blankLine: 'any', prev: '*', next: 'case' }
    ],
    'prettier/prettier': 'error',
    'react/forbid-foreign-prop-types': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        // "reservedFirst"
        shorthandLast: true,
        noSortAlphabetically: true
      }
    ],
    'react/jsx-sort-default-props': 'warn',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '}']
      }
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^handle.+$/',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useAsyncEffect|useRefWithEffect)'
      }
    ],
    semi: ['error', 'never']
  }
}
