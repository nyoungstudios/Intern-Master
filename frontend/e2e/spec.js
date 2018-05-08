// e2e test powered by protractortest
describe('Skills projects', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});