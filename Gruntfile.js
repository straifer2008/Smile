module.exports = function (grunt) {
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
        autoprefixer: {
            dist: {
                files: {
                    'app/css/main.css': 'app/css/main.css'
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
                    'public/css/build.min.css': ['app/css/main.css']
                }
            }
        },

        //Uglify files
        uglify: {
            my_target: {
                files: {
                    'public/js/build.min.js': ['app/libs/jquery/jquery.min.js', 'app/libs/bootstrap/dist/js/bootstrap.js', 'app/libs/OwlCarousel2/dist/owl.carousel.js','app/js/main.js']
                }
            }
        },

       /* //Brauserify
        browserify: {
            main: {
                src: 'app/js/main.min.js',
                dest: 'public/js/build.min.js'
            }
        },*/

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
                tasks: ['less', 'autoprefixer', 'cssmin', /*'uglify'*/],
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
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin', 'uglify', 'express', 'watch']);
};