const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
