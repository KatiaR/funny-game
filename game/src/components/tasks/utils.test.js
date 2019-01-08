import randomInteger, { allowDrop } from './utils';

describe('test utils', () => {
  it('randomInteger', () => {
    expect(randomInteger(1, 3)).toBeLessThanOrEqual(3);
    expect(randomInteger(1, 3)).toBeGreaterThanOrEqual(1);
  });
  it('allowDrop', () => {
    const e = {
      preventDefault() {
        return null;
      },
    };
    const spy = jest.spyOn(e, 'preventDefault');
    allowDrop(e);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
