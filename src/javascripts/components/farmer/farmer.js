const farmerMaker = (farmer) => {
  let domString = '';
  domString += '<div class="col-4">';
  domString += `<div id="${farmer.id}" class="card farmer-card">`;
  domString += `<div class="card-header">${farmer.name}</div>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${farmer.name}</h5>`;
  domString += `<p>${farmer.age}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { farmerMaker };
