module.exports = {extractor:function extractCIFAndPackageID (request) {
if(request && request.path) {
var req = request.path.split('/');
if(req.length >2 && req[1]) {
return { CustomerID: req[2] }
}
}
return null;
}}