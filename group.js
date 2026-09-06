const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    groupName: String,
    village: String,
    leader: String,
    members: [
        {
            name: String,
            role: String
        }
    ]
});

module.exports = mongoose.model("Group", groupSchema);