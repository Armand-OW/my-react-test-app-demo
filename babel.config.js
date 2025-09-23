//configure babel for jest testing (create some DOM, to run our tests)

export const presets = [
    ['@babel/preset-env', { targets: { node: 'current' } }],
]

//#region Test

if (process.env.NODE_ENV === 'test') {
    presets.push([
        '@babel/preset-env',
        {
            targets: {
                node: 'current',
            },
            useBuiltIns: 'usage',
            corejs: 3,
        },
    ])
}
//#endregion