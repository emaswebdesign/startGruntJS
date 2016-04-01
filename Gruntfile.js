module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: ['src/sass/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['src/scripts/*.js'],
        tasks: ['uglify']
      }
    },
    jasmine: {
    pivotal: {
      src: 'src/scripts/*.js',
      options: {
        specs: 'spec/*Spec.js',
        helpers: 'spec/*Helper.js'
      }
    }
  },
    uglify: {
    my_target: {
      files: {
        'build/script.min.js': ['src/scripts/script1.js', 'src/scripts/script2.js']
      }
    }
  },
    sass: {                
      dist: {                
        options: {               
          style: 'expanded'
        },
        files: {               
          'build/main.css': 'src/sass/main.scss'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('default', ['uglify', 'sass', 'watch']);
  grunt.registerTask('test', ['jasmine']);

};