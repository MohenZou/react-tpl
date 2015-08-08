module.exports = {
  entry: {
    js: './src/js/app.js',
    sass: './src/sass/main.scss',
    images: './src/img/*'
  },
  lib: {
    css: {
      bundleFileName: 'bundle.css',
      dest: 'lib/css'
    },
    js: {
      bundleFileName: 'bundle.js',
      dest: 'lib/js'
    }
  }
};
