let express = require('express');
let router = express.Router();
let fs = require('fs');

let dbconnector = require('./dbconect/dbconector');

let response;


const app = express();

fs.readFile('./templates/response.json', 'utf-8', function readData(err, file){
    if(err) {
        console.log(err);
    } else {
        try {
            response = JSON.parse(file);
        } catch (err) {
            console.log(err);
        }
    }
});


/* POST counters */
app.post('/', function(req, res, next) {
    let inputparam = req.body.queryResult.parameters.unit;
    let responsevalues = dbconnector.getCounters(inputparam) ;
    response.fulfillmentMessages = responsevalues;
    res.send(response);
});

app.listen(3000, () => console.log('open for e-business'));