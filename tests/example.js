import axios from "axios";
import _upperFirst from 'lodash/upperFirst';
import _toLower from 'lodash/toLower';

export function double(num) {
  if(!num) {
    return 0
  }
  return num * 2
}

// 비동기 함수
export function asyncFn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Done!')
    }, 6000);
  }) 
}

// 모의 함수
export async function fetchMovieTitle() {
  const res = await axios.get('https://omdbapi.com?apikey=7035c60c&i=tt4520988')
  return _upperFirst(_toLower(res.data.Title)) // Frozen II => Frozen ii
}