<<<<<<< HEAD
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
=======
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.config.common")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
>>>>>>> 7d62c98ad3bf8d57651aa1bf2b1155f5bb20dd8a

module.exports = merge(commonConfig, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /node_modules/,
                }
            }
        }
    },
    plugins: [],
});
