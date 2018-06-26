import React from 'react';
import {connect} from 'react-redux';
import {makeUserSelector} from "../../ducks/posts";

const mapState = (state, ownProps) => {
    const userSelector = makeUserSelector(ownProps.postId);
    return {
        username: userSelector(state).get('username'),
        realName: userSelector(state).get('real_name'),
        verified: userSelector(state).get('verified')
    }
};

export const Username = connect(mapState, {})((props) => {
    const {
        username,
        realName,
        verified
    } = props;

    return (
        <div className="full-names">
            {verified ? <i className="material-icons">verified_user</i> : null}
            {verified ? ' ' : ''}
            <span className="real-name">{realName}</span>
            {" - "}
            <span className="username">{"@"+username}</span>
        </div>
    );
});