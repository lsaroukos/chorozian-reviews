const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const {resolve} = require("path");
const { ROOT_DIR } = require('./utils');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Import plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const WPConfig = {
    ...defaultConfig,
}

//remove the rtl and MiniCssExtraPlugin
const filtered_plugins = WPConfig.plugins.filter(plugin => {
    return plugin.constructor.name !== 'RtlCssPlugin' && plugin.constructor.name !== 'MiniCssExtractPlugin';
});


//default export
module.exports = (env, argv) => { //use env variables from current environment to set the output directory

    return {
        ...WPConfig,
        mode: env.NODE_ENV === 'production' ? 'production' : 'development',
        entry: resolve(process.env.WP_SRC_DIRECTORY, 'index.js'), // Explicitly set entry
        output: {
            filename: 'index.js',
            path: resolve( ROOT_DIR, 'blocks/dist/' + env.OUTPUT_DIR ),
        },
        plugins: [
            ...filtered_plugins,
            new MiniCssExtractPlugin({
                filename: 'index.css',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: '**/*.json', // Source: all JSON files
                        context: process.env.WP_SRC_DIRECTORY, 
                        to: resolve( ROOT_DIR, 'blocks/dist/' + env.OUTPUT_DIR ), // Destination: output directory
                        noErrorOnMissing: true, // Prevent errors if no files are found
                    },
                ],
            }),
        ],
    }
};

