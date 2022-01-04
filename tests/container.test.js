const Container = require('../src/container');
jest.useFakeTimers();
let cont = {};

beforeAll(() => {
  cont = new Container();
});

test('container exists', () => {
  expect(cont).toBeDefined();
});

test('docker container exists', () => {
  expect(cont.container).toBeDefined();
});

test('container has an IP', () => {
  expect(cont.ip).toBeDefined();
});