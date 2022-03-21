const express = require("express");
const { uploadFile, deleteFile } = require("../controllers/file.controller");
const router = express.Router()

router.post("/login/file", uploadFile);
router.post("/delete/file", deleteFile);

module.exports = router;

