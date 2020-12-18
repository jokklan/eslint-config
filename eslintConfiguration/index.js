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
    camelcase: ['warn', { allow: ['^_[^_]+$'] }],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    'no-param-reassign': [
      'warn',
      {
        ignorePropertyModificationsFor: ['result']
      }
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      // { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      // { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]},
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'any', prev: ['let', 'var'], next: 'multiline-block-like' },
      { blankLine: 'any', prev: '*', next: 'case' },
      { blankLine: 'any', prev: '*', next: 'default' }
    ],
    'prettier/prettier': 'warn',
    'react/forbid-foreign-prop-types': 'warn',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'warn',
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
      'warn',
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
      'warn',
      {
        additionalHooks: '(useAsyncEffect|useRefWithEffect)'
      }
    ],
    semi: ['error', 'never']
  }
}
