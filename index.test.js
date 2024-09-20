// DO NOT CHANGE ANYTHING IN THIS FILE.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test 1', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when n=50', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('50');

    jest.isolateModules(() => {
      const { num } = require('./');
      expect(num).toEqual(47);
    });
  });
  test('when n=2', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('2');

    jest.isolateModules(() => {
      const { num } = require('./');
      expect(num).toEqual(2);
    });
  });
  test('when n=20', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('20');

    jest.isolateModules(() => {
      const { num } = require('./');
      expect(num).toEqual(19);
    });
  });
  test('when n=1', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('1');

    jest.isolateModules(() => {
      const { num } = require('./');
      expect(num).toEqual(undefined);
    });
  });
  test('when n=7', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('7');

    jest.isolateModules(() => {
      const { num } = require('./');
      expect(num).toEqual(7);
    });
  });
});
