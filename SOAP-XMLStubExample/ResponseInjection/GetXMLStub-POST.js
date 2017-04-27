function GetTemplateResponse (request, state, logger) {
response = "<%- stringify(filename, 'StubTemplate\\RecordAdded.xml') %>"
return {
statusCode : 200,
headers: {
'Content-Type': 'application/xml; charset=utf-8'
},
body: response
};
}