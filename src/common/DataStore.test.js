/* eslint-disable no-undef */
import DataStore from './DataStore';

describe('Test DataStore', () => {

  const testVar1 = DataStore.shared('test');
  const testVar2 = DataStore.shared('test');
  const testVar3 = DataStore.shared('otherTest');

  const testVarArray1 = DataStore.sharedArray('testArray');
  const testVarArray2 = DataStore.sharedArray('testArray');
  const testVarArray3 = DataStore.sharedArray('otherTestArray');

  const obj = { bar: 66, hello: 'world' };
  const array = [1, 2, 3, 99, 'blz'];

  test('Test shared()', () => {

    expect(DataStore.shared('test')).toEqual({});
    expect(DataStore.shared('otherTest')).toEqual({});

    testVar1.foo = 'ok';
    expect(testVar2).toEqual({ foo: 'ok' });
    expect(testVar3).not.toEqual({ foo: 'ok' });

  });

  test('Test sharedArray()', () => {

    expect(DataStore.sharedArray('testArray')).toEqual([]);
    expect(DataStore.sharedArray('otherTestArray')).toEqual([]);

    testVarArray1.push('ok');
    expect(testVarArray1).toEqual(['ok']);
    expect(testVarArray2).toEqual(['ok']);
    expect(testVarArray3).not.toEqual(['ok']);

  });

  test('Test store()', () => {

    expect(DataStore.store('otherTest', obj)).toEqual(obj);
    expect(testVar3).toEqual(obj);
    expect(testVar2).not.toEqual(obj);

    expect(DataStore.store('otherTestArray', array)).toEqual(array);
    expect(testVarArray3).toEqual(array);
    expect(testVarArray2).not.toEqual(array);

  });

  test('Test readOnly()', () => {

    expect(DataStore.readOnly('otherTest')).toEqual(obj);

    const tmp1 = DataStore.readOnly('otherTest');
    tmp1.newKey = 'ops';
    expect(DataStore.shared('otherTest', obj)).toEqual(obj);

    const tmp2 = DataStore.shared('otherTest');
    tmp2.newKey = 'ops';
    expect(DataStore.shared('otherTest', obj)).not.toEqual(obj);

  });

});
