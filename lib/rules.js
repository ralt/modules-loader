/**
 * @file
 * Default rules available in the module loader.
 */

'use strict';

module.exports = {
    /**
     * File is a javascript file.
     *
     * @param files array
     *   Array of files on which to apply the rule.
     * @return array
     *   Array of files that pass the rule.
     */
    isJavascript: function( files ) {
        return files.filter( function( file ) {
            return /\.js$/.test( file );
        });
    },

    /**
     * File is not part of a .git folder.
     *
     * @param files array
     *   Array of files on which to apply the rule.
     * @return array
     *   Array of files that pass the rule.
     */
    isNotGit: function( files ) {
        return files.filter( function( file ) {
            return !/\.git\//.test( file );
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
    isNotNodeModule: function( files ) {
        return files.filter( function( file ) {
            return !/node_modules\//.test( file );
        });
    }
};

