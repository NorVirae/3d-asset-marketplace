const express = require("express");
const { getTransactions, innitiateTransaction, verifyTransaction } = require("../controllers/payments.controller");
const router = express.Router()


router.get("/get/all/transactions", getTransactions);
router.post("/initiate/transaction", innitiateTransaction);
router.post("/verify/transaction", verifyTransaction);



module.exports = router;