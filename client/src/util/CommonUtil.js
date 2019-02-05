/**
 * Executes multiple promises sync'd
 * @example
 * // resolves promise
 * chainPromises([promise1, promise2]);
 * @returns {Promise} Returns a promise that will be resolved once all the chained promises were resolved
 */

const chainPromises = chain => new Promise(
  (resolve, reject) => {
    chain.push(resolve);
    chain.reduce((promise, next) => promise.then(next), Promise.resolve());
  }
);

const findRecord = (data, id) => data.find(record => record._id === id);

const CommonUtil = {
  chainPromises,
  findRecord
};

export default CommonUtil;
