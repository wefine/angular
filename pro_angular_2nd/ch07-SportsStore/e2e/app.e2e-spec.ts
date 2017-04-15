import { Ch07SportsStorePage } from './app.po';

describe('ch07-sports-store App', () => {
  let page: Ch07SportsStorePage;

  beforeEach(() => {
    page = new Ch07SportsStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
