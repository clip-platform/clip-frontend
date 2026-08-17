export const environment = {
  production: true,
  // Empty string = relative path. In production nginx proxies /api/* to the
  // dotnet-api container (see nginx/proxy.conf in the deployment guide),
  // so the browser calls the same origin it's served from.
  apiUrl: ''
};
