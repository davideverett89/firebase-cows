import utils from '../../helpers/utils';

const showForm = () => {
  let domString = '';
  domString += '<h2>New Cow</h2>';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-name">Name</label>';
  domString += '<input type="text" class="form-control" id="cow-name" placeholder="Cow Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-location">Location</label>';
  domString += '<input type="text" class="form-control" id="cow-location" placeholder="Location">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-breed">Breed</label>';
  domString += '<input type="text" class="form-control" id="cow-breed" placeholder="Breed">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-weight">Weight</label>';
  domString += '<input type="number" class="form-control" id="cow-weight" placeholder="55">';
  domString += '</div>';
  domString += '<button id="cow-creator" type="submit" class="btn btn-dark">Add Cow</button>';
  domString += '</form>';
  utils.printToDom('new-cow', domString);
};

export default { showForm };
