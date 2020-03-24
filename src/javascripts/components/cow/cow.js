const cowMaker = (cow) => {
  let domString = '';
  domString += '<div class="col-4">';
  domString += '<div class="card">';
  domString += `<div class="card-header">${cow.name}</div>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${cow.breed}</h5>`;
  domString += `<p>${cow.weight}</p>`;
  domString += `<p>${cow.location}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { cowMaker };
