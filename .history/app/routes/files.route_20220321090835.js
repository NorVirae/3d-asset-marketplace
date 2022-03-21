const express = require("express");
const { uploadFile, deleteFile } = require("../controllers/file.controller");
const authticateToken = require("../middleware/auth.middleware");
const router = express.Router()

router.post("/upload/file", uploadFile);
router.post("/delete/file", deleteFile);
router.post("/buy/storage", buyStorage);


module.exports = router;