module.exports = {
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": "2018",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "plugins": [
    "json",
    "markdown",
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
};