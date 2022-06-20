import CryptoJS from "crypto-js";

/**
 * encrypt `data` buffer or string into a sha1 hash
 * @name sha1
 * @param {string|Buffer} data
 * @returns {string} sha1 hash
 * @example
 *  sha1('foo bar') // => '3773dea65156909838fa6c22825cafe090ff8030'
 */
export function sha1(data) {
  return CryptoJS.SHA1(data);
}
