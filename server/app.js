/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data        = require('./data');
const http        = require('http');
const url         = require('url');

const {
    filterDataItemsByString
}                 = require('../utils')

const HOSTNAME    = 'localhost';
const PORT_SERVER = 3035;

/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer(async function (req, res) {
    // .. Here you can create your data response in a JSON format
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/search') {
        console.log('!!! /search end point', query)
        const filteredData = filterDataItemsByString(query.queryToSearchBy, data)

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Max-Age', 2592000); // 30 days

        res.write(JSON.stringify(filteredData));
        res.end(); //end the response
        return;
    }
    res.write('I am an api response.'); // Write out the default response
    res.end(); //end the response
}).listen( PORT_SERVER );


console.log(`[Server running on ${HOSTNAME}:${PORT_SERVER}]`);
