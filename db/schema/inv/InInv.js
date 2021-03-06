const mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId,
    createCollection = require('@finelets/hyper-rest/db/mongoDb/CreateCollection')

const dbModel = createCollection({
    name: 'InInv',
    schema: {
        po: ObjectId,
        qty: Number,
        date: Date,
        loc: String,
        source: {
            type: String,
            unique: true
        }
    }
})

module.exports = dbModel