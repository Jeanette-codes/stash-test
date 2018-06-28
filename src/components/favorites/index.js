import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const mapState = state => ({
  favCount: state.getIn(['favorites', 'data'])
});

export const Favorites = props => {
  return (
    <div className="favorites-container">
      <i className="material-icons">favorites</i>
      <p>{props.favCount.size}</p>
    </div>
  );
};

export default connect(mapState)(Favorites);
