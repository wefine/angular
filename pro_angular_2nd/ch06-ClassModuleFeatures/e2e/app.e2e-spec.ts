import { Ch06ClassModuleFeaturesPage } from './app.po';

describe('ch06-class-module-features App', () => {
  let page: Ch06ClassModuleFeaturesPage;

  beforeEach(() => {
    page = new Ch06ClassModuleFeaturesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
