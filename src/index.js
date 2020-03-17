
exports.min = function min (array) {
  if(!array.length) {
    return 0;
  }

  if(array === undefined) {
    return 0;
  }
  
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if(!array.length) {
    return 0;
  }

  if(array === undefined) {
    return 0;
  }

  return Math.max(...array);
}

exports.avg = function avg (array) {

  if(array.length) {
    let len = array.length
    return array.reduce((accum, curr) => accum + curr) / len;
  }

}
