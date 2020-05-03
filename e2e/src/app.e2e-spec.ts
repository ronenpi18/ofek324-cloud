import { EssentialsPage } from './app.po';

describe('Essentials App', () => {
    let page: EssentialsPage;

    beforeEach(() => {
        page = new EssentialsPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to Essentials!');
    });
});
