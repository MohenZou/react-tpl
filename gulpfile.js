'use strict'

var config = require('./gulpconfig'),
    gulp = require('gulp');

function initGulpTasks(gulp, config) {
  require('./tasks/javascript')(gulp, config);
  require('./tasks/sass')(gulp, config);
  require('./tasks/watch')(gulp, config);
}

initGulpTasks(gulp, config);

