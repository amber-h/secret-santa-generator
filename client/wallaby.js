module.exports = function () {
  return {
    files: [
      {pattern: "html/lib/*.js", instrument: false},
      {pattern: "**/*template.js", load: false},
      {pattern: "**/index.js", load: false},
      {pattern: "html/bootstrap.js", instrument: false}
    ],
    tests: [
      {pattern: "**/*spec.js", load: false},
    ]
  };
};
