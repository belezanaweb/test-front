module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [message => message.match(/^wip/i)],
};