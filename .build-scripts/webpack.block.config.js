const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const {resolve} = require("path");
const { ROOT_DIR } = require('./utils');


const WPConfig = {
    ...defaultConfig,
}


//default export
module.exports = (env) => { //use env variables from current environment to set the output directory
    return {
        ...WPConfig,
        mode: env.NODE_ENV === 'production' ? 'production' : 'development',
        output: {
            filename: '[name].js',
            path: resolve( ROOT_DIR, 'blocks/dist/' + env.OUTPUT_DIR ),
        },
    }
};

