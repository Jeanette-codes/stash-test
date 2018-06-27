import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import {
  changeSearchInputAction,
  requestSearchAction
} from '../../ducks/search';

const mapState = state => ({
  value: state.getIn(['search', 'value'])
});

export const Search = props => {
  const { value, dispatch } = props;

  const keyHandler = e => {
    if (e.key === 'Enter') {
      dispatch({ type: requestSearchAction, value });
    }
  };

  const changeHandler = e => {
    const { value } = e.target;
    dispatch({ type: changeSearchInputAction, value });
  };

  const clickHandler = e => {
    dispatch({ type: requestSearchAction, value });
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        key="searchInput"
        type="text"
        {...{ value }}
        onKeyPress={keyHandler}
        onChange={changeHandler}
      />
      <i
        className="material-icons search-button"
        key="searchIcon"
        onClick={clickHandler}
      >
        search
      </i>
    </div>
  );
};

export default connect(mapState)(Search);
