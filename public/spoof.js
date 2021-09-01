const defProp = (prop, value) => {
  Object.defineProperty(Object.getPrototypeOf(navigator), prop, {
    get() {
      return value;
    },
    configurable: true,
  });
};

const navigatorInfo = JSON.parse(localStorage.getItem('navigatorInfo'));
console.log(navigatorInfo);

navigatorInfo.forEach((ele) => {
  if (ele.value) defProp(ele.key, ele.value);
});
