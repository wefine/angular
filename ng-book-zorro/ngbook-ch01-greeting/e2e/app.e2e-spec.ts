import { NgbookCh01GreetingPage } from './app.po';

describe('ngbook-ch01-greeting App', () => {
  let page: NgbookCh01GreetingPage;

  beforeEach(() => {
    page = new NgbookCh01GreetingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
