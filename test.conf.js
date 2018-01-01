module.exports = config => {
  config.set({
    basePath: __dirname,
    frameworks: ['jasmine', 'browserify'],
    files: ['tests/**/*.js'],
    exclude: ['.eslintrc.js', 'node_modules'],
    preprocessors: {
      'index.js': ['browserify'],
      'tests/**/*.js': ['browserify'],
    },
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-browserify'],
    reporters: ['progress'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    // Only during local testing
    singleRun: false,
    concurrency: Infinity,
  });
};
