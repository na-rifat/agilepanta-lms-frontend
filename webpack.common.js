const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: { main: "./src/js/script.js", vendor: "./src/js/vendor.js" },
    performance: {
        maxEntrypointSize: 5120000,
        maxAssetSize: 5120000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "login.html",
            template: "./src/login.html",
        }),
        new HtmlWebpackPlugin({
            filename: "course-outline.html",
            template: "./src/course-outline.html",
        }),
        new HtmlWebpackPlugin({
            filename: "select-courses.html",
            template: "./src/select-courses.html",
        }),
        new HtmlWebpackPlugin({
            filename: "cart.html",
            template: "./src/cart.html",
        }),
        new HtmlWebpackPlugin({
            filename: "registration.html",
            template: "./src/registration.html",
        }),
        new HtmlWebpackPlugin({
            filename: "payment-verify.html",
            template: "./src/payment-verify.html",
        }),
        new HtmlWebpackPlugin({
            filename: "payment.html",
            template: "./src/payment.html",
        }),
        new HtmlWebpackPlugin({
            filename: "design-thinking.html",
            template: "./src/design-thinking.html",
        }),
        new HtmlWebpackPlugin({
            filename: "commune-sity.html",
            template: "./src/commune-sity.html",
        }),
        new HtmlWebpackPlugin({
            filename: "consulting.html",
            template: "./src/consulting.html",
        }),
        new HtmlWebpackPlugin({
            filename: "data-analytics.html",
            template: "./src/data-analytics.html",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/img",
                    to: "img/[path]/[name][ext]",
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: (name) => {
                        /**
                         * @description Remove first & last item from ${path} array.
                         * @example
                         *      Orginal Path: 'src/images/avatar/image.jpg'
                         *      Changed To: 'images/avatar'
                         */
                        const path = name.filename
                            .split("/")
                            .slice(1, -1)
                            .join("/");
                        return `${path}/[name][ext]`;
                    },
                },
            },
        ],
    },
};
