module.exports = {

    addition: function (...values) {
        var result = values.reduce(function (prev, current) {
            return prev + current;
        }, 0);

        return result;
    },

    biggerThanTen: function (value) {
        if (value > 10) {
            return true;
        }

        return false;
    }

};
