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
            expect(myService.addition(1, 2, 3, 4, 5)).to.be.a('number').and.equal(15);

            myService.addition(1, 2).should.equal(3);
            assert.equal(myService.addition(1, 2), 3);

            return done();
        })
    });

    describe('biggerThanTen()', function () {

        it('Should return correct results', function (done) {
            // exhausting testing is impossible
            // choose a few important test cases
            // since this function is checking for values bigger than 10,
            // so is it true or false for 10?
            expect(myService.biggerThanTen(1)).to.be.false;
            expect(myService.biggerThanTen(10)).to.be.false;
            expect(myService.biggerThanTen(11)).to.be.true;

            return done();
        })
    });

});
