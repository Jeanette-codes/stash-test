import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Avatar} from './Avatar';
import {Username} from "./Username";
import {Timestamp} from "./Timestamp";
import {Message} from "./Message";
import {makeReplySelector, makeCurrentUserSelector} from "../../ducks/posts";

const mapState = (state, ownProp) => {
    const replySelector = makeReplySelector(ownProp.postId);
    const currentUserSelector = makeCurrentUserSelector(ownProp.postId);

    return {
        reply_to: replySelector(state),
        currentUser: currentUserSelector(state)
    };
};

export const Post = connect(mapState,{})(props => {
    const {postId, reply_to, currentUser} = props;
    const postClass = classnames({
        'single-post': true,
        'is-reply': !!reply_to,
        'current-user': currentUser
    });
    
    return <div className={postClass}>
        <Avatar key={'avatar'+postId} {...{postId}} />
        <div className="message-container" key={"message-container"+postId}>
            <Username key={'username'+postId} {...{postId}} />
            <Timestamp key={'timestame'+postId} {...{postId}} />
            <Message key={'message'+postId} {...{postId}} />
        </div>
    </div>
});