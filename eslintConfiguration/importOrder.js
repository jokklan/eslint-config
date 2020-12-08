module.exports = {
  plugins: ['import'],
  rules: {
    // analysis/correctness
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/no-absolute-path': 'error',
    'import/no-webpack-loader-syntax': 'warn',
    'import/no-self-import': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-extraneous-dependencies': 'error',

    // red flags (thus, warnings)
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-cycle': 'warn',
    'import/no-useless-path-segments': 'warn',

    // Styling
    'import/first': 'error',
    'import/newline-after-import': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
  settings: {
    'import/extensions': ['.js', '.jsx']
  },
  // need all these for parsing dependencies (even if _your_ code doesn't need
  // all of them)
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  }
}
