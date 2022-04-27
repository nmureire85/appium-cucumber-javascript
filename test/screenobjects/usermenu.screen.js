
class UserMenuScreen {
    get userMenuScreenButton() {
        return $(
            process.env.PLATFORM === 'android'
              ? '//android.widget.TextView[@resource-id="sidemenuButton"]'
              : '~Get the ultimate answer');         
    }

    get menuAlert() {
        return $(
            process.env.PLATFORM === 'android'
              ? 'id:android:id/button1'
              : '~OK');
    }

    scrollFromLeftEdge() {
    browser.touchAction([
        { action: 'press', x: 0.9, y: 1762 },
        { action: 'moveTo', x: 2000, y: 106 },
        'release'
    ]);
    }
}

module.exports = new UserMenuScreen();