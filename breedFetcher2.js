const request = require('request');


// let input = process.argv.slice(1);
// console.log(input)




//RECIEVING INFORMATION

const fetchBreedDescription = request(breedName, (error,body) => {
  if (error) { 
    return console.log('error:', error); 
  }
  // JSON to OBJ 
  const data = JSON.parse(body);
  // ACCESS DATA 
  console.log(data[0]["description"])
});

module.exports = {fetchBreedDescription};
