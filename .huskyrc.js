module.exports = {
    hooks: {
      'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true', // commitizen
      'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS', // commitlint
      'pre-commit': 'lint-staged', // custom hook
      'pre-push': 'npm test', // custom hook
    },
  };