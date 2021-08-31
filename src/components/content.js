chrome.storage.sync.get('info', ({ info }) => {
  localStorage.setItem('info', JSON.stringify(info));

  const script = document.createElement('script');
  script.src = chrome.extension.getURL('spoof.js');
  script.async = false;
  document.documentElement.appendChild(script);
});
