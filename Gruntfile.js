module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {               
          'build/main.css': 'src/sass/main.scss'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};