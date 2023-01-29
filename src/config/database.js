const fs = require("fs");
const path = require("path");
require('dotenv').config()

const dirpath = path.join(__dirname, "..", "..", "ssl", "DigiCertGlobalRootCA.crt.pem")

console.log(dirpath)

module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    define:{
        underscored: true,
        timestamps: false
    },
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync(dirpath)
        }
    }
}