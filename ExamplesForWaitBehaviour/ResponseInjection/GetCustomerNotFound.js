function GetTemplateResponse (request, state, logger) {
response = JSON.parse("<%- stringify(filename, 'StubTemplate\\CustomerNotFoundView.json') %>");
return {
statusCode : 404,
headers: {
'Content-Type': 'application/json; charset=utf-8'
},
body: response
};
}