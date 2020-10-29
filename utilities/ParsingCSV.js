const fs = require("fs");
const readline = require('readline');
const { Volantino } = require("./Volantino");
const volantino = require('./Volantino').Volantino;


class ParsingCSV {
    constructor(csvFilePath, limit) {
        this.csvFilePath = csvFilePath;
        this.limit = limit;
        this.arrayCsv = [];
    }

    async arrayFromCSV() {

        var stoploop = this.limit;
        var arrFromCSV = [];
        var start = 0;

        const rl = readline.createInterface({
            input: fs.createReadStream('./sourceFile/flyers_data.csv'),
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            if (start <= stoploop) {
                arrFromCSV.push(line)
            }
            start++
        }

        var jsonObjArray = this.arrayToArray2Dimension(arrFromCSV);
        var arrayToJson = this.array2DimensionToJSON(jsonObjArray);

        return arrayToJson;
    };

    arrayToArray2Dimension(csvArray) {
        var jsonObjArray = []

        if (typeof csvArray !== 'undefined' && csvArray.length > 0) {
            var i = 0;

            csvArray.forEach(element => {
                jsonObjArray[i] = element.split(',');
                i++;
            })
        } else {
            console.log('Array epmty error');
        }

        return jsonObjArray;
    }

    array2DimensionToJSON(array2Dimension) {
        var arrJson = [];

        if (typeof array2Dimension !== 'undefined' && array2Dimension.length > 0) {

            for (var i = 1; i <= array2Dimension.length - 1; i++) {
                arrJson[i] = new Volantino(
                    array2Dimension[i][0],
                    array2Dimension[i][1],
                    array2Dimension[i][2],
                    array2Dimension[i][3],
                    array2Dimension[i][4],
                    array2Dimension[i][5],
                    array2Dimension[i][6],
                    array2Dimension[i][7]
                )
            }
            return arrJson.splice(1, arrJson.length);
        } else {
            return "Error JSON script";
        }
    }
}

module.exports.ParsingCSV = ParsingCSV;