import { element, by, browser, ExpectedConditions } from 'protractor';

export class BasePage {
  _defaultTimeout: 1000;

  /**
   * Navigates to the url
   * @param url - location to navigate to ex.: http://localhost:4200
   */
  async navigateToUrl(url: string): Promise<void> {
    await browser.waitForAngularEnabled(false);
    await browser.get(url);
  }

  /**
   * Returns a promise if element is visible
   * @param selector
   * @param elementText
   */
  async isElementVisible(
    selector: string,
    elementText?: string
  ): Promise<boolean> {
    const currentElement = elementText
      ? element(by.cssContainingText(selector, elementText))
      : element(by.css(selector));
    await browser.wait(
      ExpectedConditions.visibilityOf(currentElement),
      this._defaultTimeout
    );
    return currentElement.isDisplayed();
  }

  /**
   * Inputs values into element if visible
   * @param selector
   * @param inputValue
   */
  async enterValuesInInputField(
    selector: string,
    inputValue: any
  ): Promise<void> {
    const currentElement = element(by.css(selector));
    await browser.wait(ExpectedConditions.visibilityOf(currentElement));
    await currentElement.sendKeys(inputValue);
  }

  /**
   * Inputs values into element if visible
   * @param selector
   * @param inputValue
   */
  async clickElement(
    selector: string
  ): Promise<void> {
    const currentElement = element(by.css(selector));
    await browser.wait(ExpectedConditions.visibilityOf(currentElement));
    await currentElement.click();
  }

  // async findElementByClass(
  //   className: string
  // ): Promise<void> {
  //   const currentElement = element(by.className(className));
  //   await browser.wait(ExpectedConditions.visibilityOf(currentElement));
  //   await currentElement.click();
  // }
}
