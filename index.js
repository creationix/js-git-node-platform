module.exports = {
  bops: require('bops'),
  fs: require('./fs.js'),
  tcp: require('./tcp.js'),
  http: require('./http.js'),
  ssh: require('./ssh.js'),
  sha1: require('./sha1.js'),
  inflate: require('./inflate.js'),
  deflate: require('./deflate.js'),
  trace: require('./trace.js'),
  agent: "jsgit/" + require('js-git/package.json').version,
};
