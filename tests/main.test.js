import { isTrue } from '../src/js/main';

test('isTrue', () => {
  const test = isTrue();
  expect(test).toBeTruthy();
});
