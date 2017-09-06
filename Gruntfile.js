module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    //Compiles LESS files
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "app/css/main.css": ["app/less/main.less"]
                }
            }
        },
    //Autoprefixer
        autoprefixer:{
            dist:{
                files:{
                    'app/css/main.css':'app/css/main.css'
                }
            }
        },
    //CSSMinificator
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/css/main.min.css': ['app/css/main.css']
                }
            }
        },

    //Uglify files
        uglify: {
            my_target: {
                files: {
                    'app/js/main.min.js': ['app/js/main.js', 'app/js/add/*.js']
                },
            },
        },

    //Brauserify
        browserify: {
            dist: {
                files: {
                    'app/js/main.min.js': ['node_modules/bootstrap/*/*.*', 'node_modules/jquery/*/*.*']
                },
            }
        },

        //Concat files
        concat: {
            basic: {
                src  : 'app/js/main.min.js',
                dest : 'public/js/build.min.js',
            },
            extras: {
                src : 'app/css/main.min.css',
                dest: 'public/css/build.min.css',
            },
        },

    // AutoReload pages
        express: {
            all: {
                options: {
                    bases: ['app', 'public'],
                    livereload: true,
                    open: 'http://localhost:3000'
                }
            }
        },

    //Watching the files in my project
        watch: {
            styles: {
                files: ['app/**/*.less', 'app/css/**/*.css', 'app/*.html', 'app/js/*.js', 'public/*.html'],
                tasks: ['less', 'autoprefixer', 'cssmin', 'uglify', 'concat'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    // Load the plugin task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin', 'uglify', 'concat', 'express', 'watch']);
    grunt.registerTask('test', 'cssmin');
};