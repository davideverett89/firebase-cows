import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildFarmer = (e) => {
  const farmerId = e.target.closest('.card').id;
  smash.getSingleFarmerWithCows(farmerId)
    .then((response) => {
      const singleFarmer = response.data;
      let domString = '';
      domString += '<h2 class="text-center">Featured Farmer</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-dark">';
      domString += `<div class="card-header">Farmer ${singleFarmer.name} (Age: ${singleFarmer.age})</div>`;
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('single-farmer', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildFarmer };
