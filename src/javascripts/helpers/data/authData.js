import firebase from 'firebase/app';
import 'firebase/auth';

import pasture from '../../components/pasture/pasture';
import farmHouse from '../../components/farmHouse/farmHouse';

const checkLoginStatus = () => {
  const authDiv = $('#auth');
  const pastureDiv = $('#pasture');
  const logoutButton = $('#navbar-logout-button');
  const farmHouseDiv = $('#farmHouse');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      farmHouseDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pasture.buildCows();
      farmHouse.buildFarmers();
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      farmHouseDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
