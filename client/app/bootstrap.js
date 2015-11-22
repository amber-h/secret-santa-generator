var isWallabyRun = (typeof wallaby === "object");

isWallabyRun ? wallaby.delayStart() : void(0);

requirejs.config({
    shim: {
      "js/lib/jquery": {
        exports: "jQuery"
      }
    },
    deps: isWallabyRun ? wallaby.tests : undefined,
    callback: isWallabyRun ? wallaby.start : undefined
});
