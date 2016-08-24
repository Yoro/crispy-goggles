module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./htdocs/js/app.js",
    },
    // Enable sourcemaps for debugging webpack's output
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // Assume a corresponding global variable exists and use that instead.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
