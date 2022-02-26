const router = require("express").Router()
const api = require("./api")

router.post("/scrapesite", api.datascraper)

module.exports = router;
