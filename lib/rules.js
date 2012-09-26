/**
 * @file
 * Default rules available in the module loader.
 */

module.exports = {
    /**
     * File is a javascript file.
     *
     * @param files array
     *   Array of files on which to apply the rule.
     * @return array
     *   Array of files that pass the rule.
     */
    jsFile: function( files ) {
        return files.filter( function( file ) {
            return file.slice( -3 ) === '.js';
        });
    },

    /**
     * Folder name = file name.
     *
     * @param files array
     *   Array of files on which to apply the rule.
     * @return array
     *   Array of files that pass the rule.
     */
    folderFile: function( files ) {
        return files.filter( function( file ) {
            // Get the folder name
            var folder = file.split( '/' ).reverse()[ 1 ];

            console.log( file, folder );

            // The file extension is .js, so we slice accordingly.
            return file.slice( 0, -3 ) === folder;
        });
    },

    /**
     * Ignore node_modules folders.
     *
     * @param files array
     *   Array of files on which to apply the rule.
     * @return array
     *   Array of files that pass the rule.
     */
    nodeModules: function( files ) {
        return files.filter( function( file ) {
            return !/node_modules/.test( file );
        });
    }
};

