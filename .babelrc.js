module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
  ],
};
