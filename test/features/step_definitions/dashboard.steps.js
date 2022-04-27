const { When, Then } = require('@cucumber/cucumber');
const dashboardScreen = require('../../screenobjects/dashboard.screen');

When(/^User navigates to the dashboard screen$/, function () {
    dashboardScreen.dashBoardTab.click();
  });

Then(/^dashboard screen is loaded successfully$/, function () {
    expect(dashboardScreen.dashBoardTitle).toBeDisplayed();
});
