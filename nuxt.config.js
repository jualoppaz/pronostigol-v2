import esVuetifyLocale from 'vuetify/es5/locale/es';
import esLocale from './locales/es';
import { version } from './package.json';

// Sitemaps
import mainSitemap from './sitemaps/main';

import quinielaSitemap from './sitemaps/quiniela';
import quinielaTicketsSitemap from './sitemaps/quiniela/ticket-details';

import bonolotoSitemap from './sitemaps/bonoloto';
import bonolotoTicketsSitemap from './sitemaps/bonoloto/ticket-details';

import euromillonesSitemap from './sitemaps/euromillones';
import euromillonesTicketsSitemap from './sitemaps/euromillones/ticket-details';

import primitivaSitemap from './sitemaps/primitiva';
import primitivaTicketsSitemap from './sitemaps/primitiva/ticket-details';

import gordoSitemap from './sitemaps/gordo';
import gordoTicketsSitemap from './sitemaps/gordo/ticket-details';

const es = {
  ...esLocale,
  $vuetify: esVuetifyLocale,
};

require('dotenv').config();

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | PRONOSTIGOL',
    title: 'pronostigol-v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  publicRuntimeConfig: {
    appVersion: version,
    apiUrl: process.env.API_URL,
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/nuxt-pronostigol-client.js',
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        locales: ['es'],
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: {
            es,
          },
        },
      },
    ],
    '@nuxt/content',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-2309187828170787',
    }],
    ['nuxt-cookie-control', {
      controlButton: false,
    }],
  ],
  styleResources: {
    scss: [
      './assets/styles/_variables.scss',
      './assets/styles/_mixins.scss',
      './assets/styles/_global.scss',
    ],
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    optionsPath: './vuetify.options.js',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^vue-adblock-detector/],
    // eslint-disable-next-line no-unused-vars
    extend(config, { isDev, isClient }) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias.vue = 'vue/dist/vue.common';
    },
  },
  serverMiddleware: [
    { path: '/api', handler: '@/api/index.js' },
  ],
  sitemap: {
    hostname: 'https://www.pronostigol.es',
    path: '/sitemap.xml',
    gzip: true,
    sitemaps: [
      mainSitemap,
      quinielaSitemap,
      quinielaTicketsSitemap,
      bonolotoSitemap,
      bonolotoTicketsSitemap,
      euromillonesSitemap,
      euromillonesTicketsSitemap,
      primitivaSitemap,
      primitivaTicketsSitemap,
      gordoSitemap,
      gordoTicketsSitemap,
    ],
  },
  content: {
    liveEdit: false,
  },
  cookies: {
    colors: {
      barBackground: '#1976d2',
    },
    text: {
      barTitle: 'Cookies',
      barDescription: 'Utilizamos cookies propias y de terceros para poder mostrarle este sitio web. Ponemos a la disposición de los usuarios toda la información detalla para comprender mejor cómo se usan, con el fin de mejorar los servicios que ofrecemos. Si continúa navegando, consideramos que ha aceptado las cookies.',
      acceptAll: 'Aceptar todas',
      declineAll: 'Rechazar todas',
      manageCookies: 'Gestionar cookies',
      unsaved: 'Tienes cambios sin guardar',
      close: 'Cerrar',
      save: 'Guardar',
      necessary: 'Cookies necesarias',
      optional: 'Cookies opcionales',
      functional: 'Cookies funcionales',
      blockedIframe: 'Para ver esto, por favor, activa las cookies funcionales',
      here: 'aquí',
    },
    necessary: [
      {
        name: 'doubleclick.net',
        description: 'Cookies utilizadas para gestionar las impresiones y clicks de los anuncios mostrados en Pronostigol.',
        cookies: ['DSID', 'IDE'],
      }, {
        name: 'google.com',
        description: 'Cookies utilizadas por Google Analytics y Google AdSense para gestionar el tráfico y mostrar anuncios acorde a la navegación previa de cada usuario.',
        cookies: [
          '1P_JAR', 'AID', 'APISID', 'CONSENT', 'HSID', 'NID', 'SAPISID', 'SID', 'SIDCC', 'SSID',
        ],
      }, {
        name: 'www.google.com',
        description: 'Cookies utilizadas por Google Analytics y Google AdSense para gestionar el tráfico y mostrar anuncios acorde a la navegación previa de cada usuario.',
        cookies: ['UULE', '_ga'],
      }, {
        name: 'google.es',
        description: 'Cookies utilizadas por Google Analytics y Google AdSense para gestionar el tráfico y mostrar anuncios acorde a la navegación previa de cada usuario.',
        cookies: [
          '1P_JAR', 'APISID', 'CONSENT', 'HSID', 'NID', 'SAPISID', 'SID', 'SSID',
        ],
      }, {
        name: 'pronostigol.es',
        description: 'Cookies utilizadas por Google Analytics y Google AdSense para gestionar el tráfico y mostrar anuncios acorde a la navegación previa de cada usuario.',
        cookies: ['_ga', '_gat', '_gat_gtag_UA_57106519_1', '_gid'],
      }, {
        name: 'twitter.com',
        description: 'Cookies utilizadas para la comunicación con Twitter y poder twittear rápidamente desde Pronostigol.',
        cookies: [
          '_utma', '_utmz', '_ga', '_gid', '_twitter_sess', 'ads_prefs', 'auth_token', 'csrf_same_site_set', 'ct0', 'dnt', 'eu_cn', 'guest_id', 'kdt', 'mbox', 'personalization_id', 'remember_checked_on', 'syndication_guest_id', 'tfw_exp', 'twid', 'twtr_pixel_opt_in',
        ],
      }, {
        name: 'syndication.twitter.com',
        description: 'Cookies utilizadas para la comunicación con Twitter y poder twittear rápidamente desde Pronostigol.',
        cookies: ['lang'],
      },
    ],
  },
};
