import { spy, stub } from 'sinon';

import Console from './Console';

describe('Console', () => {
  let errorLog = [];
  let consoleLog = [];

  beforeAll(() => {
    stub(process, 'stderr').callsFake((...args) => {
      args.forEach(arg => errorLog.push(arg));
    });

    stub(process, 'stdout').callsFake((...args) => {
      args.forEach(arg => consoleLog.push(arg));
    });
  });

  test('console has log and error', () => {
    expect(Console.log).toBeDefined();
    expect(Console.error).toBeDefined();
  });

  test('console can log', () => {
    const testString = 'Test';
    Console.log(testString);
    expect(consoleLog.includes(testString));
  });

  test('console can write errors', () => {
    const testString = 'Test';
    Console.error(testString);
    expect(errorLog).includes(testString);
  });
});
