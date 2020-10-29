const ParsingCSV = require('../utilities/ParsingCSV').ParsingCSV;
const url = require('url');



module.exports = app => {
    app.post('/api/flyers', async(req, res) => {
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;

        var page = parseInt(query.page);
        var limit = parseInt(query.limit);

        var parsingCSV = new ParsingCSV('./sourceFile/flyers_data.csv', (limit * page))
        var arrayOutput = await parsingCSV.arrayFromCSV();

        res.send(arrayOutput);
    });
}