// Imports
  var gulp = require('gulp-param')(require('gulp'), process.argv);
  var shell = require('shelljs');
  var open = require('open');

// Tasks

  // Install typings definitions (ex. gulp typings:install --module dt~request --global)
    gulp.task('typings:install', function(module, global, dt) {
      if (!module) {
        shell.exec('node_modules/.bin/typings install');
      } else {
        shell.exec(
          'node_modules/.bin/typings install '+
          (dt ? 'dt~' : '')+
          module+' --save'+
          (global ? ' --global' : '')
        );
      }
    });

  // Search for typings definitions
    gulp.task('typings:search', function(module) {
      if (!module) return;
      shell.exec('node_modules/.bin/typings search '+module);
    });

  // Uninstall definition
    gulp.task('typings:uninstall', function(module) {
      if (!module) return;
      shell.exec(
        'node_modules/.bin/typings uninstall '+module+' --save'+
        (global ? ' --global' : '')
      );
    });

  // Serve app
    gulp.task('serve', function (show) {
      if (show) {
        open('http://localhost:3000');
      }
      shell.exec('node_modules/.bin/webpack --watch');
    });

  // Build webpack
    gulp.task('webpack:build', function () {
      return shell.exec('node_modules/.bin/webpack');
    });