const request = require('request');
const fs = require('fs')

// let input = process.argv.slice(1);
// console.log(input)


// if (!(input[1].includes('https://api.thecatapi.com/v1/breeds/search?q='))) { 
//   input[1] = 'https://api.thecatapi.com/v1/breeds/search?q='+ input[1];
// }

//RECIEVING INFORMATION

// const fetchBreedDescription = request(input[1], (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//  /*  console.log('body:', body); // Print the HTML for the Google homepage. */
//   console.log(body.length);
//   // IF YOU WANT TO WRITE RESPONSE TO AN INDEX.html 
//   /* fs.writeFile(input[2], body, err => {
//     if (err) {
//       console.error(err);
//       return;
//     } 
//   })*/
//   // JSON to OBJ 
  // const data = JSON.parse(body);
//   // ACCESS DATA 
//   console.log(data[0]["description"])
//   console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
// });


// const fetchBreedDescription = function(breedName,callback) {
//   request(breedName, callback);
// }


const fetchBreedDescription = function(input,callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`,(error,description) => {
    if(!error) { //IF THIS IS AN INVALID URL, DO NOTHING, ELSE DO THIS:
      const data = JSON.parse(description.body); //IF NO ERROR PARSE
      if (data.length === 0) { //THING INSIDE IS EITHER AN EMPTY ARRAY (INVALID BREED) OR CONTAINS INFO. CHECK. IF INVALID THEN... 
        callback("nosuchbreed", null); //WE PLUG THIS INTO THE CALLBACK IN THE INDEX.JS FILE. NOSUCHBREED IS THE ERROR
      } else {
        callback(null, data[0].description) //THIS MEANS THERE IS NO ERROR. 
      }
    }
  });
}

module.exports = {fetchBreedDescription};