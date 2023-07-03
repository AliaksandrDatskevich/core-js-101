
/**
 * Returns CSV representation of two-dimensional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */



const val = [
      [  0, 1, 2, 3, 4 ],
      [ 10,11,12,13,14 ],
      [ 20,21,22,23,24 ],
      [ 30,31,32,33,34 ]
    ];



function test(val) {
  console.log(val);
  const res = val.map((el) => el.join()).join('\n');
  return res;
}



console.log(test(val));
