const repeatRecursive = (input, num, callback) => {
  if (num === 0) return input;
  return repeatRecursive(callback(input), num - 1, callback);
};

