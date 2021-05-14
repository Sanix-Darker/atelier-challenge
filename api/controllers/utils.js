/* eslint-disable import/prefer-default-export */
import fs from 'fs';


export const paginateResults = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

/**
 *
 * @returns
 */
export const getDatabase = () => {
  const data = fs.readFileSync(`${process.env.DB_PATH}`, { encoding: 'utf8', flag: 'r' });
    // parse JSON string to JSON object
  return JSON.parse(data);
};


export const setDatabase = (datas) => {
  return fs.writeFileSync(`${process.env.DB_PATH}`, JSON.stringify(datas));
};

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


/**
 * This method will get sorted array of cat and then paginate it
 * @param {*} page
 * @returns
 */
export const getCatScores = (page) => {
  const database = getDatabase();

  const sortedArray = database.sort((a, b) => b.score - a.score);

  return paginateResults(sortedArray, 10, page);
};


export const updateCatScore = (catID) => {
  const database = getDatabase();

  const ind = database.findIndex(item => item['id'] === catID);
  if (ind !== -1) {
    database[ind]['score'] += 1;
    setDatabase(database);
  }
};
