import { PixiAngularPage } from './app.po';

describe('pixi-angular App', () => {
  let page: PixiAngularPage;

  beforeEach(() => {
    page = new PixiAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
