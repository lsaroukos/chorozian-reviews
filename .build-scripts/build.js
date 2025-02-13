const zipArchive = require( 'adm-zip' );
const { sync: glob } = require( 'fast-glob' );
const { dirname } = require( 'path' );
const { stdout } = require( 'process' );
var config = require('../package.json');
const exportWithVersion = false;

var zipDirName = `${config.name}`;
if ( exportWithVersion ) {
    zipDirName = `${config.name}-${config.version}`;
}
var zipFileName = `${zipDirName}.zip`;

const zip = new zipArchive();

let files = glob(
    [
        'assets/**',
        'images/**',
        'parts/**',
        'templates/**',
        'patterns/**',
        'styles/**',
        'blocks/dist/**',
        'includes/**',
        'vendor/**',
        'functions.php',
        'composer.json',
        'index.php',
        'editor-style.css',
        'style.css',
        'theme.json',
        'screenshot.png',
        'readme.txt',
        'readme.*',
    ],
    {
        caseSensitiveMatch: false,
    }
);


files.forEach( ( file ) => {
    stdout.write( `  Adding \`${ file }\`.\n` );
    const zipDirectory = dirname( file );
    zip.addLocalFile( file, zipDirectory !== '.' ? `${zipDirName}/${zipDirectory}` : zipDirName );
} );

zip.writeZip( `../${zipFileName}` );
stdout.write( `\nDone. \`${zipFileName}\` is ready! 🎉\n` );