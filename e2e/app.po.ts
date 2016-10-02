import { browser, element, by } from 'protractor';

export class TempletreeUIV2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('templetree-root h1')).getText();
  }
}
