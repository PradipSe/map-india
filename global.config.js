/**
 * Env URLs
 */
const protocol = "http://";
const DEFAULT_PORT = 3000;

const LOCAL_URL = `${protocol}localhost:${DEFAULT_PORT}`;

/**
 * Personio base URLs
 */
const API_CONNECT_URL = `${protocol}personio-fe-test.herokuapp.com/api/v1/candidates`;
const baseURL = process.env.NODE_ENV == "development" && LOCAL_URL;

/**
 * API Service URLs
 */
const API_ENDPOINT_URL = `${baseURL}/endpoint/api/personio`;

/**
 * Global constants
 */
const headerType = "application/json";
const timeout = 180000;
const endpointErrorMsg = "Something went wrong!";

/**
 * Exporting all constant globally
 */
module.exports = {
  baseURL,
  API_CONNECT_URL,
  API_ENDPOINT_URL,
  DEFAULT_PORT,
  timeout,
  headerType,
  endpointErrorMsg
};
