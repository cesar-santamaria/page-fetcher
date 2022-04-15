const request = require('request'); //npm package that allows for easier HTTP requests.
const fs = require('fs'); //node package that allows to write content to a local file path.

request('http://www.example.edu/', function(error, response, body) {
  if (error) { //if HTTP address is incorrect throw an error and end the process.
    console.log('WHOOPS something went wrong,',error);
    process.exit();
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const content = body; //storing the recieved body request content in a variable
  const LOCAL_PATH = './index.html';
  
  if (fs.existsSync(LOCAL_PATH)) { // edge case: if file already exists exit out of process.
    console.log('ERROR: file already exists.');
    process.exit();
  }

  fs.writeFile(LOCAL_PATH, content, err => {
    if (err) return console.error(err);
    const stats = fs.statSync(LOCAL_PATH); // accessing stats on file written
    const bytes = stats.size; // storing byte size downloaded
    console.log(`Downloaded and saved ${bytes} bytes to ${LOCAL_PATH}`);//file written successfully
  });
});
