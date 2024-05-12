const path = require('path')

const config = {
    port:process.env.PORT || 5000,
    db_user:process.env.DB_USER,
    db_password:process.env.DB_PASSWORD,
    db_name:process.env.DB_DBNAME
}

module.exports = {config};
