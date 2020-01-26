module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*']
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      'cssSrcDir': 'src/sass',
      'cssTargetDir': 'css',
      'jsSrcDir': 'src/js',
      'jsTargetDir': 'js',
      'jsDependencies': [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/fitvids/jquery.fitvids.js',
        'bower_components/highlightjs/highlight.pack.min.js',
        'node_modules/ghosthunter/dist/jquery.ghosthunter.js'
      ],
      'cssDependencies': [
        'bower_components/normalize-css/normalize.css',
        'bower_components/highlightjs/styles/default.css'
      ]
    },
    copy: {
      dev: {
        files: [{
          dest: 'assets/font/',
          src: '*',
          cwd: 'src/font/',
          expand: true
        }]
      },
      dist: {
        files: [{
          dest: 'assets/font/',
          src: '*',
          cwd: 'src/font/',
          expand: true
        }]
      }
    },
    clean: {
      dist: ['assets']
    },
    sass: {
      dev: {
        options: {
          sourceMaps: true
        },
        files: {
          'assets/<%=  config.cssTargetDir %>/style.css': '<%=  config.cssSrcDir %>/style.scss'
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMaps: false
        },
        files: {
          'assets/<%=  config.cssTargetDir %>/style.css': '<%=  config.cssSrcDir %>/style.scss'
        }
      }
    },
    cssmin: {
      dev: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1,
          sourceMap: true
        },
        files: {
          'assets/<%=  config.cssTargetDir %>/dependencies.css': [
            '<%=	config.cssDependencies %>'
          ]
        }
      },
      dist: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1,
          sourceMap: false
        },
        files: {
          'assets/<%= config.cssTargetDir %>/dependencies.css': [
            '<%= config.cssDependencies %>'
          ]
        }
      }
    },
    postcss: {
      options: {
        map: false
      },
      files: {
        src: 'assets/<%=  config.cssTargetDir %>/*.css'
      }
    },
    uglify: {
      dev: {
        files: {
          'assets/<%= config.jsTargetDir %>/script.js': [
            '<%= config.jsSrcDir %>/**/*.js'
          ],
          'assets/<%= config.jsTargetDir %>/dependencies.js': [
            '<%= config.jsDependencies %>'
          ]
        }
      },
      devlight: {
        files: {
          'assets/<%= config.jsTargetDir %>/script.js': [
            '<%= config.jsSrcDir %>/**/*.js'
          ]
        }
      },
      dist: {
        files: {
          'assets/<%= config.jsTargetDir %>/script.js': [
            '<%= config.jsSrcDir %>/**/*.js'
          ],
          'assets/<%= config.jsTargetDir %>/dependencies.js': [
            '<%= config.jsDependencies %>'
          ]
        }
      }
    },
    watch: {
      css: {
        files: '<%=  config.cssSrcDir %>/**/*.scss',
        tasks: ['sass:dev', 'copy:dev', 'postcss']
      },
      js: {
        files: '<%=  config.jsSrcDir %>/**/*.js',
        tasks: ['uglify:devlight']
      }
    }
  });
  grunt.registerTask('build', [
    'clean:dist',
    'sass:dist',
    'cssmin:dist',
    'postcss',
    'copy:dist',
    'uglify:dist'
  ]);
  grunt.registerTask('default', [
    'sass:dev',
    'cssmin:dev',
    'postcss',
    'copy:dev',
    'uglify:dev',
    'watch'
  ]);
};