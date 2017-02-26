// @flow

import R from 'ramda';

export default (x: Array<number>): number => {
  return R.last(x);
}

const x: string = 22;