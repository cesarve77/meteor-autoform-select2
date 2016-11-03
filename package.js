Package.describe({
  name: 'aldeed:autoform-select2',
  summary: 'Custom select2 input type for AutoForm',
  version: '2.0.3',
  git: 'https://github.com/aldeed/meteor-autoform-select2.git'
});

Package.onUse(function(api) {
  api.use('templating');
  api.use('blaze');
  api.use('aldeed:template-extension');
  api.use('aldeed:autoform');
  api.addFiles([
    'autoform-select2.html',
    'autoform-select2.js'
  ], 'client');
});
