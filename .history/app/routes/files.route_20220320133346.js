const express = require("express");
const { uploadFile, deleteFile } = require("../controllers/file.controller");
const { getTransactions, innitiateTransaction, verifyTransaction } = require("../controllers/payments.controller");
const router = express.Router()


router.get("/upload/file", uploadFile);
router.post("/delete/file", deleteFile);
router.post("/verify/transaction", verifyTransaction);



module.exports = router;