import Immutable from 'immutable';

export const addToFavoritesAction = 'ADD_TO_FAVORITES';
export const removeFromFavoritesAction = 'REMOVE_FROM_FAVORITES';

export default (state = Immutable.fromJS({}), action) => {
  const { type, result, id } = action;

  switch (type) {
    case addToFavoritesAction:
      const current = state.get('data');
      return state.set('data', current.push(result));
    case removeFromFavoritesAction:
      const now = state.get('data');
      return state.set('data', now.filterNot(i => i.get('id') === id));
    default:
      return state;
  }
};
