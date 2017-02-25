import { MyA2AppPage } from './app.po';

describe('my-a2-app App', function() {
  let page: MyA2AppPage;

  beforeEach(() => {
    page = new MyA2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
