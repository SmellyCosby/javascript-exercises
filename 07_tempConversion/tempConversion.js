const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  let roundedC = Math.round(c * 10)/10;
  return roundedC;

};

const ctof = function(c) {
  let f = c * (9/5) + 32;
  let roundedF = Math.round(f * 10)/10;
  return roundedF;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
