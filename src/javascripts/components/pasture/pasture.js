import cowData from '../../helpers/data/cowData';
import utils from '../../helpers/utils';
import cowComponent from '../cow/cow';
import newCowComponent from '../newCow/newCow';

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      let domString = '';
      domString += '<h2>Pasture</h2>';
      domString += '<button id="show-add-cow-form" class="btn btn-success"><i class="fas fa-plus-circle"></i></button>';
      domString += '<div class="d-flex flex-wrap">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      utils.printToDom('pasture', domString);
      $('#show-add-cow-form').click(newCowComponent.showForm);
    })
    .catch((err) => console.error('Get Cows Broke!!!', err));
};

export default { buildCows };
