/**
 * @file
 * Loads modules according to defined rules.
 */

var loader = {};

var path = require( 'path' ),
    fs = require( 'fs' ),
    rules = require( path.join( __dirname, 'rules' ) );

/**
 * Array of rules. It's changeable by the user.
 */
loader.rules = [
    rules.jsFile,
    //rules.folderFile,
    rules.nodeModules
];

/**
 * Main method. Recursively loads the modules that pass the rules.
 *
 * @param folder string
 *   Path of the folder in which it has to recursively load the modules.
 * @return array
 *   Array of the loaded modules.
 */
loader.load = function( folder, callback ) {
    walk( folder, function( err, modules ) {
        if ( err ) {
            throw err;
        }

        // Apply each rule on the modules.
        loader.rules.forEach( function( rule ) {
            modules = rule( modules );
        });

        console.log( modules );
    });

    function walk( folder, done ) {
        var modules = [];
        fs.readdir( folder, function( err, list ) {
            if ( err ) {
                return done( err );
            }
            var i = 0;
            ( function next() {
                var file = list[ i++ ];
                if ( !file ) {
                    return done( null, modules );
                }
                file = folder + '/' + file;
                fs.stat( file, function( err, stat ) {
                    if ( stat && stat.isDirectory() ) {
                        walk( file, function( err, res ) {
                            modules = modules.concat( res );
                            next();
                        });
                    }
                    else {
                        modules.push( file );
                        next();
                    }
                });
            }());
        });
    }
};

module.exports = loader;

