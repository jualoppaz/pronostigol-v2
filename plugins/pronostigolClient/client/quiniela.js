const QUINIELA = 'quiniela';
const TICKETS = 'tickets';
const SEASONS = 'seasons';
const COMPETITIONS = 'competitions';
const TEAMS = 'teams';
const HISTORICAL = 'historical';
const COMBINATIONS = 'combinations';

function methods(client) {
  const PronostigolClient = client;

  PronostigolClient.prototype.getQuinielaTickets = function getQuinielaTickets(params) {
    return this.restClient.get(`/${QUINIELA}/${TICKETS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaTicket = function getQuinielaTickets(params) {
    const season = params && params.season;
    const day = params && params.day;

    return this.restClient.get(`/${QUINIELA}/${TICKETS}/season/${season}/day/${day}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaSeasons = function getQuinielaSeasons(params) {
    return this.restClient.get(`/${QUINIELA}/${SEASONS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaCompetitions = function getQuinielaCompetitions(params) {
    return this.restClient.get(`/${QUINIELA}/${COMPETITIONS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaTeams = function getQuinielaTeams(params) {
    return this.restClient.get(`/${QUINIELA}/${TEAMS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaStats = function getQuinielaStats(params) {
    return this.restClient.get(`/${QUINIELA}/${HISTORICAL}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaStandardStats = function getQuinielaStandardStats(params) {
    return this.restClient.get(`/${QUINIELA}/${HISTORICAL}/${COMBINATIONS}`, {
      params,
    })
      .then((response) => response.data);
  };
}

module.exports = methods;
