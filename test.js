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
    'appium:app':'E:/app-debug.apk', 
   
  }
};

(async () => {

  const driver = await wdio.remote(opts);
  //const buttonFinder = find.byText('LAUNCH FLUTTER ACTIVITY');

  //await driver.elementClick(find.byValueKey('dev.flutter.example.androidfullscreen:id/launch_button'));
  
 const buttonFinder = driver.elementClick(find.byText('LAUNCH FLUTTER ACTIVITY'));
  const counterTextFinder = find.byText('counter_tooltip counter_semantic');

 // const driver = await wdio.remote(opts);

  assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');

  await driver.execute('flutter:clearTimeline');

  await driver.execute('flutter:forceGC');

  await driver.elementClick(buttonFinder);

  assert.strictEqual(counterTextFinder,1);

  driver.deleteSession();

})();