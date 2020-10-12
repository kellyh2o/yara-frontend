import { browser, element, by, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from './base.po';

export class ReflectionsPage extends BasePage {
  
    async navigateToReflections(): Promise<void> {
      await this.clickElement('#ngb-nav-1'); // clicks the reflections button in header
    }

    async navigateToCreateReflections(): Promise<void> {
      await this.clickElement('#ngb-nav-2'); // clicks the create reflection button in header
    }
  
    async clickOnFirstReflection(): Promise<void> {
        await this.findElementByClass('reflection-title');
    }

    async findElementByClass(
        className: string
      ): Promise<void> {
        const currentElement = element(by.className(className));
        await browser.wait(ExpectedConditions.visibilityOf(currentElement));
        await currentElement.click();
      }
}
