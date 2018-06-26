import Immutable from 'immutable';

const ENTER_MESSAGE = 'microblog/messageEntry/ENTER';
const CHANGE_COUNT = 'microblog/messageEntry/CHANGE_COUNT';
const maxCharCount = 140;

export default (state = Immutable.fromJS({}), action) => {
  const { type, message, characterCount } = action;

  switch (type) {
    case ENTER_MESSAGE:
        return state.set('value', message);
    case CHANGE_COUNT:
        return state.set('characterCount', characterCount)
    default:
        return state;
  }
};

export const enterMessage = (message) => (dispatch) => {
    dispatch({
        type: ENTER_MESSAGE,
        message
    });
    dispatch({
        type: CHANGE_COUNT,
        characterCount: maxCharCount - message.replace(/\s+/g, '').length
    });
};