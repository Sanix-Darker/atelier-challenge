/* eslint-disable import/prefer-default-export */
import fs from 'fs';


/**
 *
 * @returns
 */
export const getDatabase = () => {
    const data = fs.readFileSync(`${process.env.DB_PATH}`, { encoding: 'utf8', flag: 'r' });
    // parse JSON string to JSON object
    return JSON.parse(data);
}


/**
 *  This function will choose randomly 2 different cat in the list
 * @returns
 */
export const getCatPeer = () => {
  const database = getDatabase();

  const cat1 = database[Math.floor(Math.random() * database.length)];
  let cat2 = database[Math.floor(Math.random() * database.length)];

  while (cat1 === cat2) {
    cat2 = database[Math.floor(Math.random() * database.length)];
  }
  return {
    cat1,
    cat2,
  };
};


export const getCatScores = (page) => {
    const database = getDatabase();

    const sortedArray = database.sort((a,b) =>  a.score-b.score )
}