var pmx = require('pmx').init({
  http          : true, // HTTP routes logging (default: true)
  ignore_routes : [/socket\.io/, /notFound/], // Ignore http routes with this pattern (Default: [])
  errors        : true, // Exceptions loggin (default: true)
  custom_probes : true, // Auto expose JS Loop Latency and HTTP req/s as custom metrics
  network       : true, // Network monitoring at the application level
  ports         : true  // Shows which ports your app is listening on (default: false)
});;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World 5!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
