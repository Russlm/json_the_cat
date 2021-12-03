const request = require('request');
const fs = require('fs')

let input = process.argv.slice(1);
console.log(input)


if (!(input[1].includes('https://api.thecatapi.com/v1/breeds/search?q='))) { 
  input[1] = 'https://api.thecatapi.com/v1/breeds/search?q='+ input[1];
}

//RECIEVING INFORMATION

const fetchBreedDescription = request(input[1], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 /*  console.log('body:', body); // Print the HTML for the Google homepage. */
  console.log(body.length);
  // IF YOU WANT TO WRITE RESPONSE TO AN INDEX.html 
  /* fs.writeFile(input[2], body, err => {
    if (err) {
      console.error(err);
      return;
    } 
  })*/
  // JSON to OBJ 
  const data = JSON.parse(body);
  // ACCESS DATA 
  console.log(data[0]["description"])
  console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
});

module.exports = {fetchBreedDescription};