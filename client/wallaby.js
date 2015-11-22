module.exports = function () {
  return {
    files: [
      {pattern: "app/js/lib/bind.js", instrument: false},
      {pattern: "app/js/lib/jquery.js", instrument: false},
      {pattern: "app/js/lib/jasmine-jquery.js", instrument: false},
      {pattern: "app/js/lib/require.js", instrument: false},
      {pattern: "**/index.js", load: false},
      {pattern: "app/bootstrap.js", instrument: false}
    ],
    tests: [
      {pattern: "**/*spec.js", load: false}
    ]
  };
};
