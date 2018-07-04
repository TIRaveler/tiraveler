/* eslint no-use-before-define: 0 */

/**
 * @module Console All console logging functionality
 */

/**
 * Convert primative to string
 * @param {string|number|undefined|null} aPrimative Primative to parse
 * @returns {string} Stringified primative
 */
const stringifyPrimative = aPrimative => (
  String(aPrimative)
);

/**
 * Convert array to string
 * @param {Array} anArray Array to parse
 * @returns {string} Stringified array
 */
const stringifyArray = anArray => (
  `[\n${(anArray.map(stringifyData)).join('\n')}\n]`
);

/**
 * Convert object to string
 * @param {*} anObject Object to parse
 * @returns {string} Stringifies object
 */
const stringifyObject = anObject => (
  `{\n${Object.entries(anObject).map(([key, value]) => (
    `${key}: ${stringifyData(value)}`))
    .join('\n')}\n}`
);

/**
 * Check if object is primative
 * @param {*} maybePrimative Object to check is primative
 * @returns If data type is primative
 */
const isPrimative = (maybePrimative) => {
  const dataType = typeof maybePrimative;
  return dataType === 'string' || dataType === 'number' || dataType === 'undefined' || maybePrimative === null;
};

/**
 * Parse any data type
 * @param {*} aData Any data type
 * @returns {string} Stringified data type
 */
const stringifyData = (aData) => {
  if (isPrimative(aData)) {
    return stringifyPrimative(aData);
  }

  if (Array.isArray(aData)) {
    return stringifyArray(aData);
  }

  return stringifyObject(aData);
};

/**
 * Convert data type to string
 * @param {*} args all arguments to log
 * @returns {string} Stringified arguments
 */
const argsToString = (...args) => {
  let index = 0;
  return args.reduce((streamString, arg) => {
    if (!streamString) {
      return stringifyData(arg);
    }

    if (isPrimative(arg)) {
      // If primative
      if (isPrimative(args[index - 1])) {
        // and previous arg was primative

        // Space deliminate
        index += 1;
        return `${streamString} ${stringifyData(arg)}`;
      }
    }

    // Default, newline deliminate
    index += 1;
    return streamString ? `${streamString}\n${stringifyData(arg)}` : stringifyData(arg);
  }, ''); // Initial value is empty string
};

/**
 * Create a function to log to a stream
 *
 * @param {*} stream Stream to write to
 */
const makeLoggerForStream = stream => (
/**
 * Writes message to stream
 * @param {...*} args Arguments to write
 */
  (...args) => {
    stream.write(`${argsToString(...args)}\n`);
  }
);

/**
 * Write error to console
 * @param {*} args Arguments to write
 */
const error = makeLoggerForStream(process.stderr);

/**
 * @param {...*} args Arguments to write
 */
const log = makeLoggerForStream(process.stdout);

/**
 * Custom console logger
 */
class Console {
  /**
   * Create a new console
   * @param {NodeJS.WriteStream} [stream=process.stdout] Stream to write logs to
   * @param {NodeJS.WriteStream} [streamErr=stream] Optional error stream
   */
  constructor(stream = process.stdout, streamErr = process.stdout) {
    /** Stream for logging messages */
    this.logStream = stream;

    /** Stream for logging errors */
    this.errorStream = streamErr || stream;

    this.log = makeLoggerForStream(stream);
    this.error = makeLoggerForStream(streamErr);
  }
}

module.exports = {
  Console,
  error,
  log,
  makeLoggerForStream,
};
