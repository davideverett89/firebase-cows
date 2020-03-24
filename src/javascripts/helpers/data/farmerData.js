import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmers.json`)
    .then((response) => {
      const myFarmers = response.data;
      const farmers = [];
      Object.keys(myFarmers).forEach((farmerId) => {
        myFarmers[farmerId].id = farmerId;
        farmers.push(myFarmers[farmerId]);
      });
      resolve(farmers);
    })
    .catch((err) => reject(err));
});

export default { getFarmers };
