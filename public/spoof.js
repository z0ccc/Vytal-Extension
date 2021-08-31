const defProp = (prop, value) => {
  Object.defineProperty(Object.getPrototypeOf(navigator), prop, {
    get() {
      return value;
    },
    configurable: true,
  });
};

const info = JSON.parse(localStorage.getItem('info'));

info.forEach((ele) => {
  defProp(ele.name, ele.value);
});
