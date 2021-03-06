import axios from 'axios';
import wordKey from '../apiKeys.json';

const key = wordKey.wordKey;

const getWord = () => axios({
  url: 'https://wordsapiv1.p.rapidapi.com/words/?random=true',
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': `${key}`,
  },
});


const getRandomWord = () => new Promise((resolve, reject) => {
  getWord()
    .then((response) => {
      const baseWord = response.data.word;
      const str = `${baseWord}`;
      const validate = str.toUpperCase();
      const hasO = validate.includes('O');
      const noSpace = validate.includes(' ');
      const oneWord = validate.includes('-');
      if (hasO === true && oneWord === false && noSpace === false && baseWord.length < 12) {
        resolve(baseWord);
      } else {
        resolve(getRandomWord());
      }
    })
    .catch((errorFromGetRandomWord) => {
      reject(errorFromGetRandomWord);
    });
});


export default { getRandomWord };
