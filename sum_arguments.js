function sum(...args) {
  if (arguments.length === 0) {
    return "No arguments passed";
  } else if (arguments.length === 1) {
    return "Pass more than one argument";
  }
  const sumValue = [...args].reduce((acc, ele) => acc + Number(ele), 0);
  return sumValue;
}
module.exports = sum;
