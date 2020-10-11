import { browser, element, by, ElementFinder } from 'protractor';
import { BasePage } from './base.po';

export class ReflectionsPage extends BasePage {
  
    async navigateToReflections(): Promise<void> {
      await this.clickElement('#ngb-nav-1'); // clicks the reflections button in header
    }
  
    async clickOnFirstReflection(): Promise<void> {
        const reflectionTitle = await this.findElementByClass('reflection-title');
        reflectionTitle.click();
    }

    async findElementByClass(
        className: string
      ): Promise<ElementFinder> {
        const currentElement = element(by.className(className));
        return currentElement;
      }
}
