const express = require("express");
const cors = require("cors");



module.exports = (app) => {
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
}