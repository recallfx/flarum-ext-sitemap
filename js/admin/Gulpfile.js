var flarum = require('flarum-gulp');

flarum({
  modules: {
    'recallfx/sitemap': [
      'src/**/*.js'
    ]
  }
});
