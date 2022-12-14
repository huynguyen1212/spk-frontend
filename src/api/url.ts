const API_URL = {
  USER: {
    LOGIN: 'user/login',
    USER_LIST: 'user/list',
    ME: 'user/me',
  },
  LANGUAGE: {
    GET: 'language',
    GET_DETAIL: (id: number) => `language/${id}}`,
  },
  TOPIC: {
    GET: 'topic',
    GET_DETAIL: (id: number) => `/topic/${id}}`,
  },
  BOOKING: {
    POST: 'booking',
    GET: 'booking',
    CONFIRM: 'booking/confirm',
  },
};

export default API_URL;
