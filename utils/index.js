
/** 
 * utility method to delay execution of code, if triggered within duration
 * 
 * @param {function} func - function that will be debounced
 * @param {number} timeout - duration in milliseconds after which provided function will be executed
 * @returns 
 */
function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

/**
 * utility method to filter data source by string query
 * 
 * @param {string} stringQuery - string that represent query
 * @param {Object[]} dataSource - data source structured as array of objects
 * @returns {Object[]} - filtered array of objects
 */
function filterDataItemsByString(stringQuery, dataSource){
  const filteredData = dataSource.filter((item) => {
    if (
      item.price.indexOf(stringQuery) > -1
      || item.name.indexOf(stringQuery) > -1
      || item.about.indexOf(stringQuery) > -1
      || item.tags.indexOf(stringQuery) > -1
    ) {
      return item;
    }
  });

  return filteredData;
};

module.exports = {
  debounce,
  filterDataItemsByString,
};
