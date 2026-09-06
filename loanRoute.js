const express = require("express");
const Loan = require("./loan");

const router = express.Router();

router.post("/", async (req, res) => {
    const loan = await Loan.create(req.body);
    res.json(loan);
});

router.get("/", async (req, res) => {
    const loans = await Loan.find();
    res.json(loans);
});

router.put("/:id", async (req, res) => {
    const loan = await Loan.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(loan);
});

module.exports = router;