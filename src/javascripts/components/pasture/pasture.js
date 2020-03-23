import cowData from '../../helpers/data/cowData';

const buildCows = () => {
  cowData.getCows()
    .then((response) => console.error('Get Cows Worked!!!', response.data))
    .catch((err) => console.error('Get Cows Broke!!!', err));
};

export default { buildCows };
