# appium-cucumber-javascript:
This project focuses on testing both android and ios apps using appium webdriverio with cucumber for BDD and POM(Page Object Model).

# Requirements:
- Android studio(bumblebee|2021.11). Previous should be fine.
- Xcode 13.0.0+
- Appium Inspector
- Appium installation (1.18+)
- Node.js (12.22.12)
- Carthage 0.38 (iOS)
- Visual Studio Code as IDE (Used in this project) 
- Java JDK
- Emulator and simulator setup

# Getting Started:

To run Android tests via terminal from *webriverio-appium-cucumber* directory:  

  `npm run android:test`
  
To run iOS tests via terminal from *webriverio-appium-cucumber* directory:

  `npm run android:test`

To edit emulator and simulator device capabilities access *wdio.conf.js*

```ruby
if(process.env.PLATFORM === 'android') {
    caps = [{  platformName: "Android",
    "appium:platformVersion": "10.0",
    "appium:deviceName" : "Pixel_2_API_28",
    "appium:automationName" : "UIAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/AwesomeApp.apk") }]
  
} else {
    caps = [{ platformName: "ios",
    "appium:platformVersion": "14.5",
    "appium:deviceName" : "iPhone 11 Pro",
    "appium:automationName" : "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/AwesomeApp.app")}]
}
```

# Reports:

Allure was used as the reporting tool of choice.

  - Run this command to generate the allure report in the directory  `./reports/allure-results/ `
     - `allure generate ./reports/allure-results/ --clean && allure open `  (N.B This will generate in directory above and open in your browser)


# Future improvements:

It was observed that the ability to drag/scroll horizontal from left edge to see side menu proved a challenge to solve. This could be an issue with my setup config. Need further investigation into this 
