import { HEADERS } from '../constants/headers';
import { METHODS } from '../constants/methods';
import { fetchData } from './fetchData';

export const getData = async url => {
  const data = await fetchData(url, { method: METHODS.GET });
  return data;
};

export const postData = async (url, body) => {
  const data = await fetchData(url, {
    method: METHODS.POST,
    body: JSON.stringify(body),
    headers: HEADERS
  });

  return data;
};

export const patchData = async (url, body) => {
  const data = await fetchData(url, {
    method: METHODS.PATCH,
    body: JSON.stringify(body),
    headers: HEADERS
  });

  return data;
};

export const deleteData = async url => {
  console.log('URL para DELETE:', url); // Verifica que la URL sea correcta antes de hacer la llamada
  const data = await fetchData(url, {
    method: METHODS.DELETE,
    headers: HEADERS
  });
  return data;
};
