import jestsetup from '../jestsetup';

describe('Tests for jestsetup', () => {

  it('Should test getItem', () => {
    expect(jestsetup().getItem(1)).toEqual(undefined);
  });

  it('Should test setItem', () => {
    expect(jestsetup().setItem(1)).toEqual(undefined);
  });

  it('Should test removeItem', () => {
    expect(jestsetup().removeItem(1)).toEqual(undefined);
  });

  it('Should test key', () => {
    expect(jestsetup().key(1)).toEqual(null);
  });

  it('Should test key', () => {
    expect(jestsetup().length).toEqual(0);
  });

});