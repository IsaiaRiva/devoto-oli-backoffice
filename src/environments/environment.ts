export const environment = {
  production: false,
  token: ``,
  localToken: localStorage.getItem('token'),
  isLogged: false,
  locationUrl: `http://localhost:3000`,
  baseURL: `https://www.mondadorieducation.it/app/mondadorieducation`,
  loginURL: `/api/service/user`,
  dicURL: `/api/service/dictionary`,
  userURL: `/api/service/user/browser`
};