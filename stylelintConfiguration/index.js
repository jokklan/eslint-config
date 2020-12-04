module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
    './stylelintConfiguration/order',
    './stylelintConfiguration/sassModules'
  ],
  ignoreFiles: [
    './coverage/**/*',
    './dist/**/*',
    './node_modules/**/*',
    './src/**/__snapshots__/**/*'
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['blockless-after-blockless']
      }
    ],
    'at-rule-no-unknown': null,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: [
          'after-declaration',
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'declaration-property-value-blacklist': null,
    'selector-class-pattern': [
      '^[a-z0-9\\-]+$|^[a-zA-Z0-9]+$',
      {
        message:
          'Selector should be written in lowercase-with-hyphens, or camelCase for scss modules (selector-class-pattern)'
      }
    ]
  }
}
