

var makeRequest = function(message){
  var request = require('request');

  request('http://chatterbox-server.azurewebsites.net/',
    function(err,response,body){
      console.log(response.statusCode);
      if( !err && response.statusCode === 200){
        console.log(body);
      }
    });
};

makeRequest('nonsense');
