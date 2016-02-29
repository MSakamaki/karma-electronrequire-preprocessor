var createPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.electronrequire');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    return done(null, 'window.require = window.require || window.parent.require;\n' +  content);
  };
};

createPreprocessor.$inject = ['args', 'config.electronrequirePreprocessor', 'logger', 'helper'];

module.exports = {
  'preprocessor:electronrequire': ['factory', createPreprocessor]
};
