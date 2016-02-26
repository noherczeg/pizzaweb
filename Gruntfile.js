'use strict';

var modRewrite = require('connect-modrewrite');
var webpack = require('webpack');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var appConfig = {
        app: require('./bower.json').appPath || 'src',
        dist: 'dist'
    };

    grunt.initConfig({
        appConfig: appConfig,

        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.gif|\\.woff|\\.ttf$ /index.html [L]']),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(appConfig.app),
                            connect.static(appConfig.dist)
                        ];
                    }
                }
            }
        },

        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= appConfig.app %>/**/*.ts'],
                tasks: ['clean:dist', 'typescript']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= appConfig.app %>/**/*.html', '<%= appConfig.dist %>/{,*/}*.{js}'
                ]
            }
        },

        clean: {
            dist: {
                src: ["dist/*"]
            }
        },

        wiredep: {
            app: {
                src: ['<%= appConfig.app %>/index.html'],
                ignorePath: /\.\.\//,
                exclude: [
                    'bower_components/angularjs/angular.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js'
                ]
            }
        },
        //
        //ts: {
        //    default : {
        //        src: ['<%= appConfig.app %>/**/*.ts'],
        //        out: 'dist/app.js',
        //        options: {
        //            declaration: true,
        //            module: 'amd',
        //            noImplicitAny: true,
        //            sourceMap: true,
        //            target: 'es5',
        //            noExternalResolve: true
        //        }
        //    }
        //},

        typescript: {
            default: {
                src: [
                    '<%= appConfig.app %>/**/*.ts'
                ],
                dest: 'dist',
                options: {
                    noImplicitAny: true,
                    sourceMap: false,
                    target: 'es5',
                    module: 'commonjs'
                }
            }
        }
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        grunt.task.run([
            'typescript',
            'wiredep',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'serve'
    ]);
};
