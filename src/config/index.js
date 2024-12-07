require("dotenv").config()

const config = {
    port:process.env.PORT,
    apiBaseSearch: process.env.API_BASE_SEARCH,
    apiBaseDetail: process.env.API_BASE_DETAIL,
}

module.exports = config