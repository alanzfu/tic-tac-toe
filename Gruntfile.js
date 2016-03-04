module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: { seperator: ';'},
      dist: {
        src: ['scripts/*.js'],
        dest: 'scripts/prod/app.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['specs/*.js']
      }
    },

    uglify: {
      target: {
        files: {
          'scripts/prod/app.min.js': ['scripts/*.js' ]
        }
      }

    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-mocha-test');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('default', [
    'test','concat', 'uglify'
  ])


};
