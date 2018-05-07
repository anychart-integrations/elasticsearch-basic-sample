var express = require('express');
var elasticsearch = require('elasticsearch');
var fs = require('fs');

//create an instance of the elasticsearch.Client class
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

//check Elastic node availability
client.ping({
    requestTimeout: 30000
}, function (error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});

//variable to store data from index
var dataFromElastic = null;

//search the index for required document
client.search({
    index: 'testbase',
    type: 'dataset'
}).then(function (resp) {
    //get the document from node's response
    var hits = resp.hits.hits;
    dataFromElastic = hits[0]._source.data;
    console.log(dataFromElastic);
}, function (err) {
    console.trace(err.message);
});

// Creates server instance
var app = express();

//create the HTML page and send to the host
app.get('/', function (req, res) {

    if (dataFromElastic) {

        // For this demo we are using a fs.readFileSync and string replace methods to render the page,
        // in real world application you might use one of the dozens Node.js templating engines.
        var chartTemplate = fs.readFileSync(__dirname + '/index.html').toString();
        var page = chartTemplate.replace("'{{data}}'", JSON.stringify(dataFromElastic));
        res.send(page);
    } else {
        res.status(404);
        res.send('Data not found');
    }
});


// Runs express server
app.listen(8080, function () {
    console.log('Example app is listening on port ' + 8080 + '!\n');
});