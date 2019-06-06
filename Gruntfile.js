module.exports = function(grunt) {
  grunt.initConfig({
    //task to copy files
    copy: {
      //copy from _public to public
      public: {
        expand: true,
        cwd: 'public',
        src: ['./*', './css/**/*', './img/**/*', '!./less'],
        dest: 'public'
      }
    },

    //clean before, because if someone delete a file,
    // the project must reflect for everyone
    clean: {
      public: {
        src: 'public'
      }
    },

    //concatenate css files
    concat: {
      dist: {
        src: ['public/css/**/*.css'],
        dest: 'public/css/style.css'
      }
    },

    //fix folder when minify
    cssmin: {
      minify: {
        expand: true,
        cwd: 'public/css/',
        src: ['**/*.css', '!*.min.css'],
        dest: 'public/css/',
        ext: '.min.css'
      },
      generated: {
        expand: true,
        cwd: 'public/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'public/css/',
        ext: '.min.css'
      }
    },

    //generate dinamic configs to concat and cssmin
    useminPrepare: {
      html: 'public/**/*.html'
    },

    //Alter stylesheet tags on html
    usemin: {
      html: 'public/**/*.html'
    },

    //Optimize images
    imagemin: {
      public: {
        expand: true,
        cwd: 'public/img',
        src: '**/*.{png,jpg,gif}',
        dest: 'public/img'
      }
    },

    //compile less
    less: {
      compile: {
        expand: true,
        cwd: '_public/less',
        src: ['**/*.less', '!**/_*.less'],
        dest: 'public/css',
        ext: '.css'
      }
    },

    //task observer
    watch: {
      less: {
        // ignore deleted files, observ just new and updated files
        options: {
          event: ['added', 'changed']
        },
        files: '_public/less/**/*.less',
        tasks: 'less'
      }
    }
  })

  // ------------------- Register tasks -------------------
  grunt.registerTask('dist', ['clean', 'copy'])
  grunt.registerTask('default', ['dist', 'minifica'])
  grunt.registerTask('minifica', [
    'useminPrepare',
    'less',
    'concat',
    'cssmin',
    'usemin',
    'imagemin'
  ])

  // ------------------- Load dependences -------------------
  //dependence to preserve original files
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-clean')

  //dependences to concatenate and minify
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  //dependence to automatize the change tag on html
  grunt.loadNpmTasks('grunt-usemin')

  //dependence to optmize images
  grunt.loadNpmTasks('grunt-contrib-imagemin')

  //dependence to compile less
  grunt.loadNpmTasks('grunt-contrib-less')

  //dependence observer
  grunt.loadNpmTasks('grunt-contrib-watch')
}
