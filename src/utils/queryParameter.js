const QueryParameter = {};
/**
 * @description: Append value to a query parameter in a url
 * @param {String} key
 * @param {String} value
 * @returns {String} url
 */
QueryParameter.append = (key, value, url) => {
  if (typeof key === 'undefined' || typeof key !== 'string')
    throw new Error('key is required and must be a string');
  if (typeof value === 'undefined' || typeof value !== 'string')
    throw new Error('value is required and value must be a string');
  if (typeof url === 'undefined' || typeof url !== 'string')
    throw new Error('url is required and url must be a string');
  const { hasAnyQuery, hasThisQuery } = QueryParameter.hasQuery(key, url);
  if (!hasThisQuery) {
    return `${url}${hasAnyQuery ? '&' : '?'}${key}=${value}`;
  }

  return url;
};
/**
 * @description: Check a url has any query parameters
 * @param {String} url
 * @returns {String} url
 */
QueryParameter.hasQuery = (key, url) => {
  const response = { hasAnyQuery: false, hasThisQuery: false };
  const regex = /(\?|\&)([^=]+)\=([^&]+)\w+/g;
  const queryParameters = url.match(regex);
  if (queryParameters) {
    response.hasAnyQuery = true;
    queryParameters.findIndex((queryParameter) => queryParameter.indexOf(key) > -1) > -1 &&
      (response.hasThisQuery = true);
  }

  return response;
};
export default QueryParameter;
