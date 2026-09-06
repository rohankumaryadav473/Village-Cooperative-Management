const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
    memberName: String,
    amount: Number,
    status: {
        type: String,
        default: "Pending"
    },
    repaymentAmount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Loan", loanSchema);