module.exports = {
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader', options: {
                        sourceMap: true, modules: true,
                        localIdentName: '[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                        path: 'postcss.config.js'
                        }
                    }
                },
                {
                    loader: 'sass-loader', options: { sourceMap: true }
                }
            ]
        },
        {
            // CSS SASS SCSS
            test: /\.(css|sass|scss)$/,
            use: [
              argv.mode === 'development'
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
        },
    ]
  }
}