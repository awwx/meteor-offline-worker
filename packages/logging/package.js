Package.describe({
  summary: "Shared worker logging facility",
  internal: true
});

Package.on_use(function (api) {
  api.use(['coffeescript', 'underscore'], 'client');
  api.add_files('logging.coffee', 'client');
});
