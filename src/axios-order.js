import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://react-practice-burger.firebaseio.com/'
});

export default instance;
