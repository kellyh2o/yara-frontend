import { Given, Then } from 'cucumber';
import { AuthPage } from '../pages/auth.po';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

const authPage: AuthPage = new AuthPage();

Given(/^I navigate to the login page$/, async () => {
  await authPage.navigateToLogin();
});

// Thens

Then(/^I see the authenticated home page$/, async () => {
  expect(await authPage.isAuthHomePageDisplayed()).to.be.true;
});

Then(/^I enter my credentials$/, async () => {
    await authPage.enterValuesInInputField('#username', 'hello');
    await authPage.enterValuesInInputField('#password', 'hello');
    await authPage.clickElement('#login-button')
});