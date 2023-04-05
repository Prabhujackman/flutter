const wdio = require('webdriverio');
const assert = require('assert');
const find = require('appium-flutter-finder');

const opts = {
  port: 4723,
  path: '/wd/hub',
  capabilities: {
   'appium:automationName': 'Flutter',
    'appium:platformName': 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel XL API 30', 
    'appium.appPackage' : 'com.indihood.avanti.rc', 
    'appium.appActivity' : 'com.indihood.flutter_lib.platform.MainActivity'
  }
};