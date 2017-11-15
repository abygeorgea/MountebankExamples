function GetTemplateResponse (request, state, logger) {
response = JSON.parse("<%- stringify(filename, 'StubTemplate\\CustomerFoundView.json') %>");
var ext =require('./../../../SecondExample/ResponseInjection/extractrequest');
var reqdata = ext.extractor(request);
response.data.customerID=reqdata.CustomerID;
return {
statusCode : 200,
headers: {
'Content-Type': 'application/json; charset=utf-8'
},
body: response
};
}