class DashBoardScreen {
    get dashBoardTab() {
        return $(
            process.env.PLATFORM === 'android'
              ? '//android.view.View[@resource-id="Dashboard tab"]'
              : '~Dashboard tab'); 
    }

    get dashBoardTitle() {
        return $(
            process.env.PLATFORM === 'android'
              ? '~dashboard-title'
              : '//XCUIElementTypeOther[@name="dashboard-title"]');
        	

    }
}

module.exports = new DashBoardScreen();