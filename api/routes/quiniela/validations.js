const { Joi } = require('express-validation');

module.exports = {
  getHistoricalAppearedResults: {
    query: Joi.object({
      page: Joi.number()
        .min(1)
        .required(),
      per_page: Joi.number()
        .min(1)
        .required(),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('result', 'occurrences'),
    }),
  },
  getTeams: {
    query: Joi.object({
      sort_type: Joi.string().valid('asc', 'desc'),
    }),
  },
  getSeasons: {
    query: Joi.object({
      sort_type: Joi.string().valid('asc', 'desc'),
    }),
  },
  getCompetitions: {
    query: Joi.object({
      sort_type: Joi.string().valid('asc', 'desc'),
    }),
  },
  getTickets: {
    query: Joi.object({
      season: Joi.string(),
      page: Joi.number().min(1),
      per_page: Joi.number().min(1),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('date'),
    }),
  },
  getTicketBySeasonAndDay: {
    params: Joi.object({
      season: Joi.string(),
      day: Joi.string()
        .regex(/^\d+$/),
    }),
  },
  getHistorical: {
    query: Joi.object({
      season: Joi.string(),
      competition: Joi.string(),
      local_team: Joi.string(),
      visitor_team: Joi.string(),
    }),
  },
};
