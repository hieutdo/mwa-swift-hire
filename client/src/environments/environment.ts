// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth0: {
    clientID: 'M4IY8Sx2VWBo9NUl2yF16IzXrnVVkAi7',
    domain: 'caas.auth0.com',
    responseType: 'token id_token',
    audience: 'https://api.swifthire.com',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  },
  api: {
    baseUrl: 'http://localhost:4000/api'
  }
};
