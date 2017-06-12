import { UsersManagementPage } from './app.po';

describe('users-management App', function() {
  let page: UsersManagementPage;

  beforeEach(() => {
    page = new UsersManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
