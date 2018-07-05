/**
 * Get unique key of unique data type between objects
 * @param {{}} obj1 Object 1
 * @param {{}} obj2 Object 2
 * @returns {{}} Object with different keys
 */
const getDifferentKeysAndTypes = (obj1, obj2) => {
  // Get all unique keys
  const allKeys = Object.keys(obj1).concat(Object.keys(obj2));
  const uniqueKeys = allKeys.filter((key, index) => allKeys.indexOf(key) === index);

  // Get difference between objects
  return uniqueKeys.reduce((diffObj, key) => {
    // Copy difference object
    const newDiffObj = Object.assign({}, diffObj);

    // If one object is missing the key
    if (!(key in obj1) || !(key in obj2) || typeof obj1[key] !== typeof obj2[key]) {
      // Set to new difference object
      newDiffObj[key] = obj1[key] || obj2[key];
    }

    return newDiffObj;
  }, {});
};

module.exports.getDifferentKeysAndTypes = getDifferentKeysAndTypes;
