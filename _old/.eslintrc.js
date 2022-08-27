module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: [
    '/dist/**/*', // Ignore built files.
    '*/junk**'
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'quotes': [
      'error',
      'single'
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'import/no-unresolved': 0,
    'new-cap': [
      'error',
      {
        'capIsNewExceptions': [
          'Get',
          'RegisterRoutes',
          'Router',
          'Route',
          'Post',
          'Produces',
          'Request',
          'Body',
          'Tags',
          'Path',
          'Query',
          'Delete',
          'Put',
          'Example'
        ]
      }
    ]
  },
};
