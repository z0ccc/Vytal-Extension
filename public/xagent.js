/* eslint-disable wrap-iife */
/* eslint-disable func-names */
/* eslint-disable no-var */
/* eslint-disable object-shorthand */
(function () {
  var USERAGENT =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36 Edg/92.0.902.62';
  var PLATFORM = 'Windows';
  var DEVICEMEMORY = '1';

  var defProp = function (prop, value) {
    Object.defineProperty(window.navigator, prop, {
      get: function () {
        return value;
      },
      configurable: true,
    });
  };

  defProp('userAgent', USERAGENT);
  defProp('appVersion', USERAGENT);
  defProp('platform', PLATFORM);
  defProp('deviceMemory', DEVICEMEMORY);
})();
