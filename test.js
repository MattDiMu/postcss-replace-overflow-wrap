import postcss from 'postcss'
import test from 'ava'

import plugin from './'

function run(t, input, output, opts = {}) { //eslint-disable-line
    return postcss([plugin(opts)]).process(input)
        .then(function (result) {
            t.deepEqual(result.css, output)
            t.deepEqual(result.warnings().length, 0)
        })
}

test('replace overflow-wrap with word-wrap, no options', function (t) {
    return run(t,
        '.someClass{ overflow-wrap: break-word; }',
        '.someClass{ word-wrap: break-word; }'
        , {})
})

test('add word-wrap right before overflow-wrap due to passed arg', function (t) {
    return run(t,
        '.anotherClass{font-size:1rem;overflow-wrap:break-word;}',
        '.anotherClass{font-size:1rem;word-wrap:break-word;overflow-wrap:break-word;}'
        , { method: 'copy' })
})

test('replace overflow-wrap with word-wrap, replace method', function (t) {
    return run(t,
        'main { overflow-wrap: normal; }',
        'main { word-wrap: normal; }'
        , { method: 'replace' })
})
