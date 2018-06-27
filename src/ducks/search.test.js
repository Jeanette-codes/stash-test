import reducer, {
  changeSearchInputAction,
  requestSearchAction
} from './search';
import Immutable from 'immutable';

it('should return the initial state', () => {
  expect(reducer(Immutable.fromJS({ value: '' }), {})).toEqual(
    Immutable.fromJS({ value: '' })
  );
});

it('should handle changeSearchInputAction', () => {
  expect(
    reducer(undefined, {
      type: changeSearchInputAction,
      value: 'weeeee'
    })
  ).toEqual(Immutable.fromJS({ value: 'weeeee' }));
});
