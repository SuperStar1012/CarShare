export const API_BASE_URL =
  process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? process.env.REACT_APP_BACKEND_SERVER + 'api/'
    : 'http://103.179.142.70:3000/api/';