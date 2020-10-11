import { ReflectionsPage } from '../pages/reflections.po';
import { Then } from 'cucumber';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

const reflectionsPage = new ReflectionsPage();


// Thens
Then(/^I see a list of reflections$/, async () => {
    expect(await reflectionsPage.isElementVisible('#reflections-list')).to.be.true;
});
      
Then(/^I navigate to the reflections page$/, async () => {
    await reflectionsPage.navigateToReflections();
});
     
Then(/^I select a single reflection$/, async () => {
    await reflectionsPage.clickOnFirstReflection();
});