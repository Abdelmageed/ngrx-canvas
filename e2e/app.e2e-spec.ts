import { CanvasAngularPage } from './app.po';

describe('ngrx-canvas App', () => {
  let page: CanvasAngularPage;

  beforeEach(() => {
    page = new CanvasAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
