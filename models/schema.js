var mongoose = require('mongoose');

var schema = mongoose.Schema;

var cryptoDetails = new schema({
    name:{
        type: String
    },
    symbol:{
        type: String,
        unique:true
    },
    market_cap:{
        type: String
    },
    current_price:{
        type: String
    }
})

module.exports = mongoose.model('cryptoDetail', cryptoDetails);