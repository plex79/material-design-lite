module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      task: {
        src: ['_dev/js/skrypty.js'], 
        dest: '_final/js/skrypty.min.js'
      },
      options: {
        'mangle': {},
        'compress': {},
        'beautify': false,
        'expression': false,
        'report': 'min',
        'sourceMap': false,
        'sourceMapName': undefined,
        'sourceMapIn': undefined,
        'sourceMapIncludeSources': false,
        'enclose': undefined,
        'wrap': undefined,
        'exportAll': false,
        'preserveComments': undefined,
        'banner': '',
        'footer': ''
      }
    },
    cssmin: {
      task: {
        src: ['_dev/css/style.css'], 
        dest: '_final/css/style.min.css'
      },
      options: {
        banner: null,
        keepSpecialComments: '*',
        report: 'min'
      }
    },
    watch: {
      files: ['_dev/js/*.js', '_dev/css/*.css'],
      tasks: ['uglify', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};