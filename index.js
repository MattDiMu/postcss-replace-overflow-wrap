const postcss = require('postcss');

module.exports = postcss.plugin('postcss-replace-overflow-wrap', (opts) => {
    opts = opts || {};
    const method = opts.method || 'replace';

    return (css, result) => { // eslint-disable-line no-unused-vars
        css.walkDecls('overflow-wrap', (decl, i) => { // eslint-disable-line no-unused-vars
            decl.cloneBefore({ prop: 'word-wrap' });
            if (method === 'replace') {
                decl.remove();
            }
        });
    };
});
