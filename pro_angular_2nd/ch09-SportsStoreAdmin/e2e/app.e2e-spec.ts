import { Ch09SportsStoreAdminPage } from './app.po';

describe('ch09-sports-store-admin App', () => {
  let page: Ch09SportsStoreAdminPage;

  beforeEach(() => {
    page = new Ch09SportsStoreAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
