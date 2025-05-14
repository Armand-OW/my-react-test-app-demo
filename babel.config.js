//configure babel for jest testing (create some DOM, to run our tests)

export const presets = [
    ['@babel/preset-env', { targets: { node: 'current' } }],
]