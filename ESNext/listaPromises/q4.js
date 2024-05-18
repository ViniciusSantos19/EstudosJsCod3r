const delays = [800, 1200, 1000];

const fetchSimulator = (url, delay) => {
  return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
};

const data1 = fetchSimulator('https://crocoder.dev/data1', delays[0]);
const data2 = fetchSimulator('https://crocoder.dev/data2', delays[1]);
const data3 = fetchSimulator('https://crocoder.dev/data3', delays[2]);


Promise.race([data1, data2, data3])
  .then((response) => {
    console.log('This is the fastest response:', response);
  });
