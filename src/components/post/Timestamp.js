import React from 'react';
import {connect} from 'react-redux';
import {makeTimeStampSelector} from "../../ducks/posts";

const mapState = (state, ownProps) => {
    const timeStampSelector = makeTimeStampSelector(ownProps.postId);
    return {
        timestamp: timeStampSelector(state)
    }
};

export const Timestamp = connect(mapState, {})((props) =>
    <div className='timestamp'>{props.timestamp}</div>);