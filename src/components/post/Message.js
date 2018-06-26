import React from 'react';
import {connect} from 'react-redux';
import { makeMessageSelector } from "../../ducks/posts";

const mapState = (state, ownProps) => {
    const messageSelector = makeMessageSelector(ownProps.postId);
    return {
        message: messageSelector(state)
    }
};

export const Message = connect(mapState, {})((props) => {
    return <p className="message-body">{props.message}</p>
});