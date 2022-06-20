function isNumeric(val) {
  if (typeof val === 'number' && !isNaN(val)) {
    return true;
  }

  val = (val || '').toString().trim();
  return val && !isNaN(val);
}

function commafy(val) {
  if (typeof val === 'undefined' || val === null) {
    val = '';
  }

  val = val.toString();

  if (!isNumeric(val)) {
    return val;
  }

  const parts = val.split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

function convertToTime(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);
  h = h > 0 ? h + ':' : '';
  m = (m > 0 && m < 10 ? '0' + m : m) + ':';
  s = s < 10 ? '0' + s : s;
  return h + m + s;  
}

export { commafy, convertToTime };
