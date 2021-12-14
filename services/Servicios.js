import axios from 'axios';

const apiUrl = 'https://fedeperin-harry-potter-api.herokuapp.com';

export const getHechizos = async () => {
  const resp = await axios.get(`${apiUrl}/hechizos`);
  return resp.data;
};
export const getPersonajes = async () => {
  const resp = await axios.get(`${apiUrl}/personajes`);
  return resp.data;
};
export const getLibros = async () => {
  const resp = await axios.get(`${apiUrl}/libros`);
  return resp.data;
};
export const getInfo = async () => {
  const resp = await axios.get(`${apiUrl}/info`);
  return resp.data;
};

export const getPersonaje = async id => {
  const resp = await axios.get(`${apiUrl}/personajes/${id}`);
  return resp.data;
};
export const getLibro = async id => {
  const resp = await axios.get(`${apiUrl}/libros/${id}`);
  return resp.data;
};

export const getInfoDetail = async id => {
  const resp = await axios.get(`${apiUrl}/info/${id}`);
  return resp.data;
};
