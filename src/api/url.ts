const API_URL = {
  USER: {
    LOGIN: 'api/login',
    REGISTER: 'api/register',
  },
  LANGUAGE: {
    GET: '/language',
    GET_DETAIL: (id: number) => `/language/${id}}`,
  },
  TOPIC: {
    GET: '/topic',
    GET_DETAIL: (id: number) => `/topic/${id}}`,
  },
};

export default API_URL;
