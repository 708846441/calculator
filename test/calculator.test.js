/**
 * Created by Administrator on 2017/7/30.
 */
/**
 * Created by zilinglius on 10/07/2017.
 */

var t = Token.createNew(number,1);

var ts=Token_stream.createNew();

var expect = chai.expect;

describe('Token_stream', function () {

    before(function () {
        ts.putback(t);
    });

    describe('#get()', function () {

        it('should return the token if full', function () {
            expect(ts.get()).to.be.equal(t);
        });
    });
});
