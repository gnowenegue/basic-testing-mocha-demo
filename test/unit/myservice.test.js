describe('##### MY SERVICE #####', function () {

    var myService;

    it('Load the service', function (done) {
        myService = require('../../myservice');
        expect(myService).to.exist;
        return done();
    });

    describe('addition()', function () {

        it('Should return correct results', function (done) {
            expect(myService.addition(1, 2, 3, 4, 5)).to.be.equal(15);
            // myService.addition(1, 2).should.equal(3);
            // assert.equal(myService.addition(1, 2), 3);

            // expect(myService.addition(1, 1)).to.be.a('number').and.equal(2);

            return done();
        })
    });

    describe('biggerThanTen()', function () {

        it('Should return correct results', function (done) {
            expect(myService.biggerThanTen(1)).to.be.false;

            return done();
        })
    });

});
