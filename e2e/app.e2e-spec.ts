import { MyPersonalOverviewPage } from './app.po';

describe('my-personal-overview App', () => {
  let page: MyPersonalOverviewPage;

  beforeEach(() => {
    page = new MyPersonalOverviewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
