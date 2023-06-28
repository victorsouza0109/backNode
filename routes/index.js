const express = require("express");
const router = express.Router();
const apiController = require("../controllers/controller");


router.get('/teste', apiController.teste);