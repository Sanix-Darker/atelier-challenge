// This file will setting the cat's database
// from the cats's images database link
// and add it in the db.json file
import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();


const fetchImages = async () => {
  const res = await axios.get(`${process.env.API_BASE_IMAGES}`);
  const data = res.data;

  const catsDb = data['images'].map((img, index) => {
    return {
      id: index + 1,
      name: img.id,
      image: img.url,
      score: 0,
    };
  });

  fs.writeFileSync('./data/db.json', JSON.stringify(catsDb));
};

// We fetched image and set our database
fetchImages().then(() => {
  console.log('Fetched Images and settled the Database successfully !');
}).catch((err) => {
  console.log(err);
});
