const fs = require('fs');
const {exec} = require('child_process');
const {resolve} = require('path');
const {getDirectoryNames, log, ROOT_DIR} = require('./utils');


const blocksDir = resolve(ROOT_DIR, 'blocks/src');

//get all directory names contained in the blocks/src/ folder, except from 'common'
const blockList = getDirectoryNames(fs.readdirSync(blocksDir, {
    encoding: 'utf8',
    withFileTypes: true
}), {
    excludes: ['common']
});

const blocksDist = resolve(ROOT_DIR, 'blocks/dist');    //output directory

// For each block name (as foudn in the blocks/src/ folder)
blockList.forEach(async (block) => {
    const current_output_dir = resolve(blocksDist, block );
    const commands = {
        production: `node ./node_modules/.bin/webpack --config ./.build-scripts/webpack.block.config.js --env OUTPUT_DIR=${current_output_dir} NODE_ENV=production`,
        development: `node ${ROOT_DIR}/node_modules/.bin/webpack --config ${ROOT_DIR}/.build-scripts/webpack.block.config.js --env OUTPUT_DIR=${current_output_dir}`,
    };

    exec( commands.development , {
        timeout: 0, //No execution time limit.
        cwd: resolve(__dirname, '../'), //Runs the command one level above the script’s directory.
    }, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);  //print message on console
            log(error.toString(), 'block', 'error');//log error to file
            return;
        }

        log(stdout, 'block', 'info');   //log command output to block.log file
        log(stderr, 'block', 'error');  //log command error to block-error.log file

        console.log(`Block: ${block} compiled successfully`);
    });
});
