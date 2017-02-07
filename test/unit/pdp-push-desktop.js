import pdpPushDesktop from '../../src/pdp-push-desktop';

describe('pdpPushDesktop', () => {
    describe('Greet function', () => {
        beforeEach(() => {
            spy(pdpPushDesktop, 'greet');
            pdpPushDesktop.greet();
        });

        it('should have been run once', () => {
            expect(pdpPushDesktop.greet).to.have.been.calledOnce;
        });

        it('should have always returned hello', () => {
            expect(pdpPushDesktop.greet).to.have.always.returned('hello');
        });
    });
});
