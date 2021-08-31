const defProp = (prop, value) => {
  Object.defineProperty(window.navigator, prop, {
    get() {
      return value;
    },
    configurable: true,
  });
};

const USERAGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36 Edg/92.0.902.62';
const PLATFORM = 'Windows';
const DEVICEMEMORY = 1;

console.log(Object.getPrototypeOf(navigator));

// chrome.storage.sync.get('userAgent', ({ userAgent }) => {
//   console.log(userAgent);
// });

defProp('userAgent', USERAGENT);
defProp('appVersion', USERAGENT);
defProp('platform', PLATFORM);
defProp('deviceMemory', DEVICEMEMORY);
