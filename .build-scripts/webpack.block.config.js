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


    const dist = resolve( ROOT_DIR, 'blocks/dist/' + env.OUTPUT_DIR );
    const src = resolve( ROOT_DIR, 'blocks/src/' + env.OUTPUT_DIR );

    let extra_rules = [];
    if( process.env.FRONTEND_SCRIPT!=null ){

        let fname = process.env.FRONTEND_SCRIPT.replace('file:','');

        extra_rules.push(
            {
                test: resolve(src, fname),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',  ['@babel/preset-react', {"runtime": "automatic"}]],
                    }
                }
            }
        );
    }

    return {
        ...WPConfig,
        mode: env.NODE_ENV === 'production' ? 'production' : 'development',
        entry: {
            index: resolve(process.env.WP_SRC_DIRECTORY, 'index.js'), // Explicitly set entry
            frontend: '/home/lefteris/Workspace/mariamchorozian/wp-content/plugins/chorozian-reviews/blocks/src/reviews-slider/frontend.js', // Your frontend.js file path
        },
        output: {
            filename: '[name].js',
            path: resolve( ROOT_DIR, 'blocks/dist/' + env.OUTPUT_DIR ),
        },
        plugins: [
            ...filtered_plugins,
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: '**/*.json', // Source: all JSON files
                        context: process.env.WP_SRC_DIRECTORY, 
                        to: dist, // Destination: output directory
                        noErrorOnMissing: true, // Prevent errors if no files are found
                    }
                ]
            }),
        ],
        module:{
            rules:[
                ...WPConfig.module.rules,
                ...extra_rules
            ] 
        },
        watch: false, // env.NODE_ENV === 'development', //Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.
        watchOptions: { //
            aggregateTimeout: 600,
            ignored: /node_modules/,
        },
    }
};

