const express = require("express");
const { uploadFile } = require("../controller/uploadFile");

const router = express.router();

router.post("/upload/file", uploadFile);
router.post("/delete/file", uploadFile);
