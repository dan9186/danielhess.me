module.exports = function (api) {
  const presets = [
    '@babel/preset-env',
    '@babel/preset-flow',
    '@babel/preset-react',
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
  ]

  if (api.env('test')) {
    plugins.push('babel-plugin-require-context-hook')
  }

  return {
    presets,
    plugins,
    overrides: [{
      test: './node_modules',
      sourceType: 'unambiguous',
    }],
  }
}
