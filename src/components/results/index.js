import React from 'react';
import { connect } from 'react-redux';
import { resultsIdSelector } from '../../ducks/results';
import SingleResult from './SingleResult';

const mapState = state => ({
  resultId: resultsIdSelector(state)
});

export const Results = props => (
  <div className="result-container">
    {props.resultId.map((id, i) => (
      <SingleResult {...{ id }} key={'result' + i} />
    ))}
  </div>
);

export default connect(mapState)(Results);
