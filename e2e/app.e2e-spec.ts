import { TempletreeUIV2Page } from './app.po';

describe('templetree-ui-v2 App', function() {
  let page: TempletreeUIV2Page;

  beforeEach(() => {
    page = new TempletreeUIV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('templetree works!');
  });
});
