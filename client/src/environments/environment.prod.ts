export const environment = {
  production: true,
  auth0: {
    clientID: 'M4IY8Sx2VWBo9NUl2yF16IzXrnVVkAi7',
    domain: 'caas.auth0.com',
    responseType: 'token id_token',
    audience: 'https://api.swifthire.com',
    redirectUri: 'https://hieudt.github.io/mwa-swift-hire/callback',
    scope: 'openid profile'
  },
  api: {
    baseUrl: 'https://swifthire-server-lnrlnmdbzr.now.sh/api'
  }
};
