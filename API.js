const axios = require('axios');
const cheerio = require('cheerio');

exports.datascraper = (req, res) => {
    const url = req.body.url
    if (!url) {
        return res.status(400).send("Please provide a url")
    }
    axios.get(url)
        .then(response => {
            var html = response.data
            const $ = cheerio.load(html)
            const ogelements = $("meta[property*='og:']")
            const obj = {}
            Array.from(ogelements).forEach(element => {
                const key = element.attribs.property
                const value = element.attribs.content
                obj[key] = value
            })
            var title = $('title').text()
            var type = $('meta[name="type"]').attr('content')
            var description = $('meta[name="description"]').attr('content')
            var image = $('meta[name="image"]').attr('content')
            var url = $('meta[name="url"]').attr('content')

            res.send({
                obj: obj,
                title: title,
                type: type,
                description: description,
                image: image,
                url: url,
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
}




