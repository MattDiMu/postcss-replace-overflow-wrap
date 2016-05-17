import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}


test('replace overflow-wrap with word-wrap, no options', t => {
    return run(t,
        '.someClass{ overflow-wrap: break-word; }',
        '.someClass{ word-wrap: break-word; }'
    , {});
});

test('add word-wrap right before overflow-wrap due to passed arg', t => {
    return run(t,
        '.anotherClass{font-size:1rem;overflow-wrap:break-word;}',
        '.anotherClass{font-size:1rem;word-wrap:break-word;overflow-wrap:break-word;}'
    , { method: 'copy' });
});
