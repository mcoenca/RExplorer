Package.describe({
  name: 'rexplorer:core',
  summary: 'RExplorer core package',
  version: '0.0.1',
});

Package.onUse(function(api) {
  var packages = [
    'rexplorer:lib@0.0.1',
    'rexplorer:fb-graph@0.0.1',
  ];

  api.versionsFrom('METEOR@1.1.0.2');

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'router/routes.es6',
  ], ['client', 'server']);

  api.addFiles([
    'client/head.jade',
    'client/index.scss',
    'client/MasterLayout.jade',
    'client/Nav.jade',
    'client/Test.jade',
  ], ['client']);
});
