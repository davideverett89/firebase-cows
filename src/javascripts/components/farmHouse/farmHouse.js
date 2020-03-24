import farmerData from '../../helpers/data/farmerData';
import utils from '../../helpers/utils';
import farmerComponent from '../farmer/farmer';
import singleFarmer from '../singleFarmer/singleFarmer';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      let domString = '';
      domString += '<h2>Farmers</h2>';
      domString += '<div class="d-flex flex-wrap">';
      farmers.forEach((farmer) => {
        domString += farmerComponent.farmerMaker(farmer);
      });
      domString += '</div>';
      utils.printToDom('farmHouse', domString);
      $('body').on('click', '.farmer-card', singleFarmer.buildFarmer);
    })
    .catch((err) => console.error('You fucked up.', err));
};

export default { buildFarmers };
