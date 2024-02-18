const mongoose = require("mongoose");
const sectionSchema = new mongoose.Schema({
    name: {
        type: String
    }
},{
    timestamps: true
});
module.exports = mongoose.model("Section",sectionSchema);