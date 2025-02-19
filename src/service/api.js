import axios from 'axios';

export const getApi = async () => {
  try {
    const responser = await axios.get('https://fakestoreapi.com/products');
    return responser.data;
  } catch (error) {
    console.log(error);
  }
};
