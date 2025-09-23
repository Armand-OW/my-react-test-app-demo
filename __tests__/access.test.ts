import { getUserAccessLevel } from "../src/utils/access";

describe('getUserAccessLevel', () => {
  test('returns no-access for inactive user', () => {
    expect(getUserAccessLevel('admin', false, true)).toBe('no-access');
  });

  test('returns full-access for verified admin', () => {
    expect(getUserAccessLevel('admin', true, true)).toBe('full-access');
  });
});