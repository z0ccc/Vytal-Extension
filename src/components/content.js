const script = document.createElement('script');
script.src = chrome.extension.getURL('spoof.js');
(document.head || document.documentElement).appendChild(script);
