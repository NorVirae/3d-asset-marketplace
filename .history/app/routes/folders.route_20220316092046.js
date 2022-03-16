const express = require("express");
const { uploadFile } = require("../controller/uploadFile");

const router = express.router();

router.post("/add/folder", addFolder);
router.post("/delete/folder", deleteFolder);
router.post("/edit/folder", addFolder);

