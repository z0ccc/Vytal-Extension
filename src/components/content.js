chrome.storage.sync.get('navigatorInfo', ({ navigatorInfo }) => {
  localStorage.setItem('navigatorInfo', JSON.stringify(navigatorInfo));

  const script = document.createElement('script');
  script.src = chrome.extension.getURL('spoof.js');
  script.async = false;
  document.documentElement.appendChild(script);
});
