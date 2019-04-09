/**
 * Env URLs
 */
const protocol = "http://";
const protocolSecure = "https://";
const DEFAULT_PORT = 3000;

const LOCAL_URL = `${protocol}localhost:${DEFAULT_PORT}`;

/**
 * Base URLs
 */
const API_CONNECT_URL = `${protocolSecure}api.myjson.com/bins/16abdg`;
const baseURL = process.env.NODE_ENV == "development" ? LOCAL_URL : '';

/**
 * API Service URLs
 */
const API_ENDPOINT_URL = `${baseURL}/endpoint/api/json`;
const API_ENDPOINT_WEATHER = `${protocolSecure}api.openweathermap.org/data/2.5/weather`;

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
  API_ENDPOINT_WEATHER,
  DEFAULT_PORT,
  timeout,
  headerType,
  endpointErrorMsg
};
