import React from 'react';
import { connect } from 'react-redux';
import { resultsIdSelector, searchingSelector } from '../../ducks/results';
import SingleResult from './SingleResult';
import './styles.css';
import ReactLoading from 'react-loading';

const mapState = state => ({
  resultId: resultsIdSelector(state),
  isSearching: searchingSelector(state)
});

export const Results = props => (
  <div className="result-container">
    {props.isSearching ? (
      <ReactLoading type={'bars'} color={'grey'} />
    ) : (
      props.resultId.map((id, i) => (
        <SingleResult {...{ id }} key={'result' + i} />
      ))
    )}
  </div>
);

export default connect(mapState)(Results);
