import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-practice-burger.firebaseio.com/'
});

export default instance;
