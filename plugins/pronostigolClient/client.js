function PronostigolClient({
  restClient,
}) {
  this.restClient = restClient;
}

const QUINIELA = 'quiniela';
const TICKETS = 'tickets';
const SEASONS = 'seasons';

/**
 * API Resources
 */

PronostigolClient.prototype.setBaseURL = function setBaseURL(baseURL) {
  this.restClient.defaults.baseURL = baseURL;
};

/**
 * Github methods
 */
PronostigolClient.prototype.getLastCommitDate = function getLastCommitDate() {
  return this.restClient.get('https://api.github.com/repos/jualoppaz/pronostigol-v2/commits')
    .then((response) => response.data);
};

/**
 * Quiniela methods
 */
PronostigolClient.prototype.getQuinielaTickets = function getQuinielaTickets(params) {
  return this.restClient.get(`/${QUINIELA}/${TICKETS}`, {
    params,
  })
    .then((response) => response.data);
};

PronostigolClient.prototype.getQuinielaSeasons = function getQuinielaSeasons(params) {
  return this.restClient.get(`/${QUINIELA}/${SEASONS}`, {
    params,
  })
    .then((response) => response.data);
};

module.exports = (deps) => PronostigolClient.bind(null, deps);
