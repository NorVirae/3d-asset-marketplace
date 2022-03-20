const express = require("express");
const { getTransactions, innitiateTransaction, verifyTransaction } = require("../controllers/payments.controller");
const router = express.Router()


router.get("/upload/file", uploa);
router.post("/delete/file", innitiateTransaction);
router.post("/verify/transaction", verifyTransaction);



module.exports = router;