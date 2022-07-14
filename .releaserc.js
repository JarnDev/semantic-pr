module.exports = {
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          // https://github.com/semantic-release/commit-analyzer#releaserules
          releaseRules: [],
        },
      ],
      '@semantic-release/release-notes-generator',
      '@semantic-release/github',
    ],
  };