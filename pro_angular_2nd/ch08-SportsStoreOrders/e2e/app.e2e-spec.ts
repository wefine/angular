import { Ch08SportsStoreOrdersPage } from './app.po';

describe('ch08-sports-store-orders App', () => {
  let page: Ch08SportsStoreOrdersPage;

  beforeEach(() => {
    page = new Ch08SportsStoreOrdersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
