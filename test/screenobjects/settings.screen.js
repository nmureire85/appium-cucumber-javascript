class SettingsScreen {
    get settingsTab() {
        return $(
            process.env.PLATFORM === 'android'
              ? '//android.view.View[@resource-id="Settings tab"]'
              : '~Settings tab');	
        
    }

    get settingsTitle() {
        return $(
            process.env.PLATFORM === 'android'
              ? '//android.widget.TextView[@content-desc="settings-title"]'
              : '//XCUIElementTypeStaticText[@name="settings-title"]');	
    }

    get loserOption() {
        return $(
            process.env.PLATFORM === 'android'
              ? '//android.view.ViewGroup[@content-desc="settings"]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView'
              : '~Only show losers');
    }    
}

module.exports = new SettingsScreen();