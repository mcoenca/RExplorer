Package.describe({
  name: 'rexplorer:fb-graph',
  summary: 'RExplorer fb graph api wrapper package',
  version: '0.0.1',
});

Npm.depends({
  'fbgraph': '1.0.0',
});

Package.onUse(function(api) {
  var packages = [
    'rexplorer:lib@0.0.1',
  ];

  api.versionsFrom('METEOR@1.1.0.2');

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'fb-graph.es6',
  ], ['client', 'server']);

  api.addFiles([
    'server/fb-api.es6',
  ], ['server']);
});
