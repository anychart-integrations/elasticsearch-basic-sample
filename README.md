[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://www.anychart.com)
# AnyChart Elasticsearch Integration
This example presents to you how to use Anychart library with the search and analytics engine Ealsticsearch.

## Running

To use this sample you need to have Elasticsearch installed. If you don’t have it, please, visit the [Elastic download page](https://www.elastic.co/start) or install it with WGET utility using this install guide. You should have JDK 6 or above, and NPM - package manager for Node.js.

To run Elasticsearch server and check its status, execute the following command in Elasticsearch installed folder:
```
bin/elasticsearch
```
or this one on Windows:
```
bin\elasticsearch.bat
```
Elasticsearch is now running. You can access it at http://localhost:9200 in your web browser or get info with CURL:
```
curl http://localhost:9200/
```

**To start this example run the commands listed below.**

Clone the repository from github.com:
```
git clone git@github.com:anychart-integrations/elasticsearch-basic-sample.git
```

Navigate to the repository folder:
```
cd elasticsearch-basic-sample
```

Install dependencies:
```
npm install
```

Put some test data to the Elasticsearch instance where 'testbase' is intended for an index, 'dataset' is for a type and '1' is for an id:
```
curl -XPOST -H'Content-Type: application/json' http://localhost:9200/testbase/dataset/1 -d '{"data":[{"x":"Apples", "value": "128"},{"x":"Oranges", "value": "99"},{"x":"Lemons", "value": "54"},{"x":"Bananas", "value": "150"}] }'
```

Run the sample:
```
npm start
```

Now open browser at http://localhost:8080/

## Useful commands
While Elasticsearch is running you may use commands to:

1. Get the current mapping of index 'testbase':
```
curl -XGET -H'Content-Type: application/json' "http://localhost:9200/testbase/_mapping?pretty"
```

2. Get the document from index 'testbase' with the type 'dataset' and id '1':
```
curl -XGET "http://localhost:9200/testbase/dataset/1?pretty"
```

3. Delete existing index 'testbase' from the Elasticsearch instance:
```
curl -XDELETE http://localhost:9200/testbase
```

## Technologies
Search engine - [Elasticsearch](https://www.elastic.co/products/elasticsearch/)<br />


## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://www.anychart.com/support)


## License
AnyChart Elasticksearch integration sample includes two parts:
- Code of the integration sample that allows to use Javascript library (in this case, AnyChart) with Elastichsearch engine. You can use, edit, modify it, use it with other Javascript libraries without any restrictions. It is released under [Apache 2.0 License](https://github.com/anychart-integrations/elasticsearch-basic-sample/blob/master/LICENSE).
- AnyChart JavaScript library. It is released under Commercial license. You can test this plugin with the trial version of AnyChart. Our trial version is not limited by time and doesn't contain any feature limitations. Check details [here](https://www.anychart.com/buy/).

If you have any questions regarding licensing - please contact us. <sales@anychart.com>

[![Analytics](https://ga-beacon.appspot.com/UA-228820-4/Integrations/elasticsearch-template?pixel&useReferer)](https://github.com/igrigorik/ga-beacon)
