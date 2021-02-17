/* Describes the Schema for the Counter_sp2 MongoDB database collection. */

const mongoose = require('mongoose');
const CounterSchema_sp2 = new mongoose.Schema({

    _id:{
        type:String
    },
    seq:{
        type:Number,
        default: 0
    }

})

const CounterModel_sp2 = mongoose.model('counter_sp2', CounterSchema_sp2);
module.exports = CounterModel_sp2;