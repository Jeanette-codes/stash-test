import React from 'react';
import {connect} from 'react-redux';
import {getPostIds} from '../ducks/posts';
import {Post} from './post/';
import {MessageEntry} from "./entry";

const mapState = (state) => ({
    postIds: getPostIds(state)
});

export const Timeline = connect(mapState, {})(props => [ 
    <div className="timeline-container" key="timecontain">
        <div className="posts-container">
            {props.postIds.map((postId, i) => <Post {...{postId}} key={i} />)}
        </div>
    </div>,
    <MessageEntry key="messageentry" />
]);