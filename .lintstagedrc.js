module.exports = {
  '**/*.{json,md,yml}': ['prettier -c .prettierrc --write'],
  '**/*.js': ['prettier -c .prettierrc --write', 'eslint --cache --fix'],
  '.editorconfig': ['prettier -c .prettierrc --write'],
  LICENSE: ['prettier -c .prettierrc --write'],
  'package.json': ['prettier -c .prettierrc --write', 'npm run format:package']
};
