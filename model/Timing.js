const mongoose = require("mongoose");
const timingSchema = new mongoose.Schema({
    shift: {
        type: String
    },
    start: {
        type: String
    },
    end: {
        type: String
    }
},{
    timestamps: true
});
module.exports = mongoose.model("Timing",timingSchema);