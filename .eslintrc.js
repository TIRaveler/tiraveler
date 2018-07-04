module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
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
};