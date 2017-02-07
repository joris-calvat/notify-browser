import notifyBrowser from '../../src/notify-browser';

describe('notifyBrowser', () => {
    describe('push function', () => {
        beforeEach(() => {
            spy(notifyBrowser, 'push');
            notifyBrowser.push('message');
        });

        it('should have been run once', () => {
            expect(notifyBrowser.push).to.have.been.calledOnce;
        });
    });
});
