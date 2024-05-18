const delays = [800, 1200, 1000];

const fetchSimulator = (url, delay) => {
  return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
};

Promise.all([
  fetchSimulator('www.beatles.com', delays[0]),
  fetchSimulator('www.site2.com', delays[1]),
  fetchSimulator('www.iLoveHer.com', delays[2])
]).then((response) => {
  console.log(response)
})
