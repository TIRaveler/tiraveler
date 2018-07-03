import { stub } from 'sinon';

import Console from './Console';

describe('Console', () => {
  let consoleLog = [];
  const oldWriteLog = process.stdout.write;
  // Console.log, Console.error, and Console.Console classes methods are instances
  // of makeLogger for Stream by testing this you are effectively testing everything
  const logToStream = Console.makeLoggerForStream(process.stdout);

  const stubLog = stub(process.stdout, 'write').callsFake((...args) => {
    args.forEach(arg => consoleLog.push(arg));
    oldWriteLog(...args);
  });

  beforeEach(() => {
    consoleLog = [];

    process.stdout.write = stubLog;
  });

  afterEach(() => {
    process.stdout.write.restore();
  });

  test('has log, error, makeLoggerForStream, and Console', () => {
    expect(Console.log).toBeDefined();
    expect(Console.error).toBeDefined();
    expect(Console.makeLoggerForStream).toBeDefined();
    expect(Console.Console).toBeDefined();
  });

  test('can log', () => {
    const testString = 'Test';

    logToStream(testString);

    expect(consoleLog[0]).toEqual(`${testString}\n`);
  });

  test('can log multiple arguments', () => {
    const testStrings = [
      'This',
      'Is',
      'A',
      'Test',
    ];

    const stringResult = 'This Is A Test\n';

    logToStream(...testStrings);

    expect(consoleLog[0]).toEqual(stringResult);
  });

  test('can log any data type', () => {
    logToStream('Test');
    expect(consoleLog[0]).toEqual('Test\n');

    logToStream(1);
    expect(consoleLog[1]).toEqual('1\n');

    logToStream(undefined);
    expect(consoleLog[2]).toEqual('undefined\n');

    logToStream(null);
    expect(consoleLog[3]).toEqual('null\n');

    logToStream(['This', 'is', 'a', 'test']);
    expect(consoleLog[4]).toEqual('[\nThis\nis\na\ntest\n]');

    logToStream({ test: 'This', is: 'one' });
    expect(consoleLog[5]).toEqual('{\ntest: \'This\'\nis: \'one\'');
  });
});
