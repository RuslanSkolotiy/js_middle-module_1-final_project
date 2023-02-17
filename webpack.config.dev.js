const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [new ESLintPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 3000,
        hot: true,
        open: true,
    },
});
