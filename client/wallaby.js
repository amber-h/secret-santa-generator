module.exports = function () {
  return {
    files: [
      {pattern: "html/lib/bind.js", instrument: false},
      {pattern: "html/lib/jquery.js", instrument: false},
      {pattern: "html/lib/jasmine-jquery.js", instrument: false},
      {pattern: "html/lib/require.js", instrument: false},
      {pattern: "**/index.js", load: false},
      {pattern: "html/bootstrap.js", instrument: false}
    ],
    tests: [
      {pattern: "**/*spec.js", load: false}
    ]
  };
};
