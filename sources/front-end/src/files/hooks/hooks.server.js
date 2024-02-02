import {
  PUBLIC_WS_PROTO,
  PUBLIC_WS_HOST,
  PUBLIC_WS_PORT,

  PUBLIC_WEB_PROTO,
  PUBLIC_WEB_HOST,
  PUBLIC_WEB_PORT,
  PUBLIC_WEB_DEBUG_PORT,
} from '$env/static/public';

const quotableStatements = Object.freeze(['none', 'self', 'unsafe-inline']);

const quote = (statement) => {
  return quotableStatements.includes(statement) ? `'${statement}'`: statement;
};
const reportURI = `${PUBLIC_WEB_PROTO}://${PUBLIC_WS_HOST}:${PUBLIC_WS_PORT}/csp-violation-report`;
// const reportURI = '/csp-violation-report';
const cspDirectives = {
  'default-src': ['self'],
  'img-src': ['self', 'chart.googleapis.com'],
  'font-src': ['self'],
  'manifest-src': ['self'],
  'style-src': ['self', 'unsafe-inline'],
  'script-src': ['self', 'unsafe-inline'],
  'connect-src': [
    'self',
    // svelte front-end
    `${PUBLIC_WEB_PROTO}://${PUBLIC_WEB_HOST}:${PUBLIC_WEB_PORT}`,
    // svelte dev server's port
    `${PUBLIC_WS_PROTO}://${PUBLIC_WEB_HOST}:${PUBLIC_WEB_DEBUG_PORT}`,
    // API port
    `${PUBLIC_WS_PROTO}://${PUBLIC_WS_HOST}:${PUBLIC_WS_PORT}`,
  ],
  'report-uri': [reportURI],
  'report-to': ['csp-violation-report'],
};

const DIRECTIVES = Object.entries(cspDirectives).map(([key, values]) => `${key} ${values.map((value) => `${quote(value)}`).join(' ')}`).join(';');

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const response = await resolve(event, {
    preload: ({ type, path }) => {

      switch(type) {
        case 'font': {
          return true;
        }
        default: {
          return false;
        }
      }
    },
  });

  response.headers.set('Report-To',
    JSON.stringify({
      group: 'csp-violation-report',
      max_age: 10886400,
      endpoints: [
        {
          url: reportURI,
        },
      ],
    }, null, 0));
  response.headers.set('Content-Security-Policy', DIRECTIVES);

  return response;
}