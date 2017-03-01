var postcss = require('postcss');

module.exports = postcss.plugin('postcss-replace-overflow-wrap', function (opts) {
    opts = opts || {};
    var method = opts.method || 'replace';

    return function (css, result) { // eslint-disable-line no-unused-vars
        css.walkDecls('overflow-wrap', function (decl, i) { // eslint-disable-line no-unused-vars
            decl.cloneBefore({ prop: 'word-wrap' });
            if (method === 'replace') {
                decl.remove();
            }
        });
    };
});
