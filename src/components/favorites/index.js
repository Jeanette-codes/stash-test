import React from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  favCount: state.getIn(['favorites', 'data'])
});

export const Favorites = props => {
  return <div>Number: {props.favCount.size}</div>;
};

export default connect(mapState)(Favorites);
