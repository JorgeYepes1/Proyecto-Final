const prefix = "REACT_APP_";

function getEnvironment(variable) {
  return process.env[`${prefix}${variable}`];
}

const BASE_URL = getEnvironment("BASE_URL");
const API_KEY = getEnvironment("API_KEY");

export {
  BASE_URL,
  API_KEY
};
