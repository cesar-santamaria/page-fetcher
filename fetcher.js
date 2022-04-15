const request = require('request'); //npm package that allows for easier HTTP requests.
const fs = require('fs'); //node package that allows to write content to a local file path.

request('http://www.exampsle.edu/', function(error, response, body) {
  if (error) { //if HTTP address is incorrect throw an error and end the process.
    console.log('WHOOPS something went wrong,',error);
    process.exit();
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const content = body; //storing the recieved body request content in a variable
  fs.writeFile('./index.html', content, err => {
    if (err) return console.error(err);
    //file written successfully
    console.log('File written successfully!');
  });
});
