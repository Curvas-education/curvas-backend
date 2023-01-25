const Usuario = require("../models/Questoes");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = {
    async create(req, res) {
        try {

        } catch (error) {
            return res.status(404).json({message: error})
        }
    },

    async list(req, res){
        try {

        } catch (error) {
            return res.status(404).json({message: error})
        }

    }
}
