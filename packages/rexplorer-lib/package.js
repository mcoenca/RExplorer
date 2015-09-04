Package.describe({
  name: 'rexplorer:lib',
  summary: 'Lib packages for rexplorer',
  version: '0.0.1',
});

Package.onUse(function(api) {
  var packages = [
    'grigio:babel@0.1.6',
    'standard-app-packages',
    'check',
    'reactive-var',
    'http',
    'fourseven:scss@3.2.0',
    'kadira:flow-router@2.3.0',
    'kadira:blaze-layout@2.0.0',
    'poetic:materialize-scss@1.2.6',
    'babrahams:constellation@0.1.3',
    'gandev:server-eval@0.6.6',
    'jagi:astronomy@0.12.1',
    'jagi:astronomy-slug-behavior@0.3.1',
    'jagi:astronomy-timestamp-behavior@0.5.0',
    'mquandalle:jade@0.4.3',
    'raix:handlebar-helpers@0.2.4',
  ];

  api.versionsFrom('METEOR@1.1.0.2');

  api.use(packages);
  api.imply(packages);

  api.addFiles('core.es6', ['client', 'server']);

  api.export([
    '_',
    'RExplorer',
  ]);
});
