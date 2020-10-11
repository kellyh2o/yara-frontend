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

Then(/^I see that reflection's title$/, async () => {
    expect(await reflectionsPage.isElementVisible('#selected-reflection-title')).to.be.true;
});   

Then(/^I see that reflection's text$/, async () => {
    expect(await reflectionsPage.isElementVisible('#selected-reflection-text')).to.be.true;
});
        
Then(/^I see the creation date of the reflection$/, async () => {
    expect(await reflectionsPage.isElementVisible('#selected-reflection-date')).to.be.true;
});
    

Then(/^I navigate to the create reflection page$/, async () => {
    await reflectionsPage.navigateToCreateReflections();
});

Then(/^I see a form where I can enter a reflection$/, async () => {
    expect(await reflectionsPage.isElementVisible('#create-reflection-form')).to.be.true;
}); 
         