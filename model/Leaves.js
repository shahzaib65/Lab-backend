const mongoose = require("mongoose");
const leaveSchema = new mongoose.Schema({
    leave: {
        type: String,
        required: true,
        unique: true
    }
});
module.exports = mongoose.model("Leave",leaveSchema)