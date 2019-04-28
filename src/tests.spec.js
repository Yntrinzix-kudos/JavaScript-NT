import {
  addProductType, 
  mergeProducts,
  formatCurrencyPrice
} from'./refactored/Products.js';


test('adds Product Type to object', () => {

  const expected = addProductType([{val1:'1',val2:'2'}], 'test');
  const actual = [{val1:'1',val2:'2',type:'test'}];

  expect(expected)
  .toEqual(actual);

});


test('test  addProductType if 2nd argument is undefined, should return General Merchandize', () => {

  const expected = addProductType([{val1:'1',val2:'2'}], undefined);
  const actual = [{val1:'1',val2:'2',type: 'General Merchandize'}];
  
  expect(expected)
  .toEqual(actual);

});


test('test  addProductType if 1st argument is empty array, should return empty array', () => {

  const expected = addProductType( [], 'Type');
  const actual = [];
  
  expect(expected)
  .toEqual(actual);

});

test('test  addProductType if 1st argument is undefined, should return empty array', () => {

  const expected = addProductType( undefined, 'Type');
  const actual = [];
  
  expect(expected)
  .toEqual(actual);

});


test('consolidate multiple array of objects to 1', () => {

  const expected = mergeProducts([[{val1:'1',val2:'2'}],[{val3:'3',val4:'4'}]]);
  const actual = [{val1:'1',val2:'2'},{val3:'3',val4:'4'}];

  expect(expected)
  .toEqual(actual);

});


test('test mergeProducts if arg is empty, should return empty array', () => {

  const expected = mergeProducts([]);
  const actual = [];

  expect(expected)
  .toEqual(actual);

});

test('test mergeProducts if arg is undefined, should return empty array', () => {

  const expected = mergeProducts(undefined);
  const actual = [];

  expect(expected)
  .toEqual(actual);

});

test('convert price based on currency percentage vs NZD', () => {

  const expected = formatCurrencyPrice(100,.5);
  const actual = 50.00;

  expect(expected)
  .toBe(actual);

});


test( 'test formatCurrencyPrice using string as price', () => {

  const expected = formatCurrencyPrice('10',.5);
  const actual = 5;

  expect(expected)
  .toBe(actual);

});


test( 'test formatCurrencyPrice if one of the arguments is undefined', () => {

  const expected = formatCurrencyPrice(undefined,.5);
  const actual = 'error value defined';

  expect(expected)
  .toBe(actual);

});