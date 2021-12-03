// index.js
const { fetchBreedDescription } = require('./breedFetcher3');

// console.log(process.argv)

let breedName = process.argv[2];


// if (!(breedName.includes('https://api.thecatapi.com/v1/breeds/search?q='))) { 
//   breedName = 'https://api.thecatapi.com/v1/breeds/search?q='+ breedName;
// }


// MY CODE 
// fetchBreedDescription(breedName, (error, response, body) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
// const data = JSON.parse(body);
//     console.log(data[0]["description"]);
//   }
// });

// COMPASS CODE 
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    // const data = JSON.parse(desc["body"]);
    console.log(desc);
  }
});