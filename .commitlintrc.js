module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'styles',
        'refactor',
        'ci',
        'test',
        'revert',
        'perf',
        'vercel',
      ],
    ],
  },
}