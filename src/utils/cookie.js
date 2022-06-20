const isBrowser = typeof window !== 'undefined';

function isLocalHostName() {
  const { hostname } = window.location;
  const isLocalIP = hostname.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/);
  return hostname === 'localhost' || isLocalIP;
}
function getLocalAddress() {
  const { hostname } = window.location;
  return hostname.replace(/:\d+$/, '');
}
function getDomainName() {
  return '.' + window.location.hostname.split('.').slice(-2).join('.');
}

export const setCookie = (name, value, options = {}) => {
  if (!isBrowser) return;
  const optionsWithDefaults = {
    days: 180,
    path: '/',
    domain: options.domain
      ? options.domain
      : isLocalHostName()
      ? getLocalAddress()
      : getDomainName(),
    ...options,
  };
  const expires = new Date(Date.now() + optionsWithDefaults.days * 864e5).toUTCString();

  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expires +
    '; domain=' +
    optionsWithDefaults.domain +
    '; path=' +
    optionsWithDefaults.path;
};

export const getCookie = (name, initialValue = '') => {  
  return (
    (isBrowser &&
      document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
      }, '')) ||
    initialValue
  );
};

export const removeCookie = (name, path, domain) => {
  if (!isBrowser) return;

  if (getCookie(name)) {
    setCookie(name, '', { days: -1 });
  }
};
