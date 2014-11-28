'use strict';

var modRewrite = require('connect-modrewrite');

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
                            connect.static(appConfig.app)
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
                files: ['<%= appConfig.app %>/**/*.js'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= appConfig.app %>/**/*.html', '<%= appConfig.app %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
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
        }
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        grunt.task.run([
            'wiredep',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'serve'
    ]);
};
