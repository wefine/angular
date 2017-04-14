import { Ch05JsPrimerPage } from './app.po';

describe('ch05-js-primer App', () => {
  let page: Ch05JsPrimerPage;

  beforeEach(() => {
    page = new Ch05JsPrimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
