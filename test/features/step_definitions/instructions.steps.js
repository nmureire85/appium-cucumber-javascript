const { Given } = require('@cucumber/cucumber');
const instructionsScreen = require('../../screenobjects/instructions.screen');

Given(/^User is on the instructions screen$/, function () {
    expect(instructionsScreen.instructionsScreenView).toBeDisplayed();
  });