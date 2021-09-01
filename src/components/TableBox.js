/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect } from 'react';
import Bowser from 'bowser';
import Table from './Table';

const TableBox = () => {
  // const [navigatorInfo, setNavigatorInfo] = useState();
  const [hardwareConcurrency, setHardwareConcurrency] = useState();
  const [deviceMemory, setDeviceMemory] = useState();
  const [maxTouchPoints, setMaxTouchPoints] = useState();

  useEffect(() => {
    setHardwareConcurrency(3);
    setDeviceMemory(16);
    setMaxTouchPoints(10);
    // setNavigatorInfo(infoObject);
    // chrome.storage.sync.get('navigatorInfo', ({ info }) => {
    //   // if (!info) chrome.storage.sync.set({ navigatorInfo });
    //   info.forEach((ele) => {
    //     if (ele.value) defProp(ele.key, ele.value);
    //   });
    // });
  }, []);

  useEffect(() => {
    console.log(navigatorInfo);
    chrome.storage.sync.set({ navigatorInfo });
  }, [hardwareConcurrency, deviceMemory, maxTouchPoints]);

  const navigatorInfo = [
    {
      key: 'hardwareConcurrency',
      name: 'Hardware concurrency',
      value: hardwareConcurrency,
    },
    {
      key: 'deviceMemory',
      name: 'Device memory',
      value: deviceMemory,
    },
    {
      key: 'maxTouchPoints',
      name: 'Max touchpoints',
      value: maxTouchPoints,
    },
  ];

  return (
    <div className="tableBox">
      <Table title="Navigator" data={navigatorInfo} />
    </div>
  );
};

export default TableBox;

// const uaResult = Bowser.parse(navigator.userAgent);
// const date = new Date();
// const gl = document.createElement('canvas').getContext('webgl');
// const ext = gl.getExtension('WEBGL_debug_renderer_info');
// Software table items
// const software = [
//   {
//     key: 'browser',
//     title: 'Browser',
//     value: uaResult.browser.name,
//   },
// {
//   key: 'browserVersion',
//   title: 'Browser version',
//   value: uaResult.browser.version,
// },
// {
//   key: 'browserEngine',
//   title: 'Browser engine',
//   value: uaResult.browser.engine || 'N/A',
// },
// {
//   key: 'os',
//   title: 'OS',
//   value: `${uaResult.os.name} ${uaResult.os.versionName}`,
// },
// {
//   key: 'osVersion',
//   title: 'OS version',
//   value: uaResult.os.version,
// },
// {
//   key: 'platform',
//   title: 'Platform',
//   value: navigator.platform,
// },
// {
//   key: 'systemType',
//   title: 'System type',
//   value: uaResult.platform.type,
// },
// {
//   key: 'userAgent',
//   title: 'User Agent',
//   value: navigator.userAgent || 'N/A',
// },
// {
//   key: 'preferredLanguage',
//   title: 'Preferred language',
//   value: navigator.language || 'N/A',
// },
// {
//   key: 'languages',
//   title: 'Languages',
//   value: sortArr(navigator.languages) || 'N/A',
// },
// {
//   key: 'timezone',
//   title: 'Timezone',
//   value: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A',
// },
// {
//   key: 'timezoneOffset',
//   title: 'Timezone offset',
//   value: date.getTimezoneOffset() || 'N/A',
// },
// {
//   key: 'cookiesEnabled',
//   title: 'Cookies enabled',
//   value: navigator.cookieEnabled ? 'True' : 'False',
// },
// {
//   key: 'javaEnabled',
//   title: 'Java enabled',
//   value: navigator.javaEnabled() ? 'True' : 'False',
// },
// {
//   key: 'dntHeader',
//   title: 'DNT header enabled',
//   value: navigator.doNotTrack ? 'True' : 'False',
// },
// {
//   key: 'automatedBrowser',
//   title: 'Automated browser',
//   value: navigator.webdriver ? 'True' : 'False',
// },
// {
//   key: 'plugins',
//   title: 'Plugins',
//   value: sortPlugins(navigator.plugins) || 'N/A',
// },
// ];

// Hardware table items
// const hardware = [
//   {
//     key: 'screenResolution',
//     title: 'Screen resolution',
//     value: `${window.screen.width}x${window.screen.height}`,
//   },
// {
//   key: 'colorResolution',
//   title: 'Color Resolution',
//   value: window.screen.colorDepth,
// },
// {
//   key: 'batteryLevel',
//   title: 'Battery level',
//   value: batLevel,
// },
// {
//   key: 'batteryStatus',
//   title: 'Battery status',
//   value: batStatus,
// },
// {
//   key: 'deviceMemory',
//   title: 'Device memory',
//   value: navigator.deviceMemory ? `${navigator.deviceMemory}GB` : 'N/A',
// },
// {
//   key: 'cpuCores',
//   title: '# of CPU cores',
//   value: navigator.hardwareConcurrency || 'N/A',
// },
// {
//   key: 'maxTouchpoints',
//   title: 'Max touchpoints',
//   value: navigator.maxTouchPoints,
// },
// {
//   key: 'webGLVendor',
//   title: 'WebGL vendor',
//   value: gl.getParameter(ext.UNMASKED_VENDOR_WEBGL),
// },
// {
//   key: 'webglRenderer',
//   title: 'WebGL renderer',
//   value: gl.getParameter(ext.UNMASKED_RENDERER_WEBGL),
// },
// ];
