import { stub } from 'sinon';

import Console from './Console';

describe('Console', () => {
  let consoleLog = [];
  let errorLog = [];
  const oldWriteLog = process.stdout.write;
  const oldWriteError = process.stderr.write;

  const stubLog = stub(process.stdout, 'write').callsFake((...args) => {
    args.forEach(arg => consoleLog.push(arg));
    oldWriteLog(...args);
  });

  const stubError = stub(process.stderr, 'write').callsFake((...args) => {
    args.forEach(arg => errorLog.push(arg));
    oldWriteError(...args);
  });

  beforeEach(() => {
    consoleLog = [];
    errorLog = [];

    process.stderr.write = stubError;
    process.stdout.write = stubLog;
  });

  afterEach(() => {
    process.stderr.write.restore();
    process.stdout.write.restore();
  });

  test('console has log and error', () => {
    expect(Console.log).toBeDefined();
    expect(Console.error).toBeDefined();
  });

  test('console can log', () => {
    const testString = 'Test';

    Console.log(testString);

    expect(consoleLog[0]).toEqual(`${testString}\n`);
  });

  test('console can log multiple', () => {
    const testStrings = [
      'This',
      'Is',
      'A',
      'Test',
    ];

    const stringResult = 'This Is A Test\n';

    Console.log(...testStrings);

    expect(consoleLog[0]).toEqual(stringResult);
  });

  test('console can write errors', () => {
    const testString = 'Test';

    Console.error(testString);

    expect(errorLog[0]).toEqual(`${testString}\n`);
  });

  test('console can write multiple error', () => {
    const testStrings = [
      'This',
      'Is',
      'An',
      'Error',
    ];

    const stringResult = 'This Is An Error\n';

    Console.error(...testStrings);

    expect(errorLog[0]).toEqual(stringResult);
  });
});
