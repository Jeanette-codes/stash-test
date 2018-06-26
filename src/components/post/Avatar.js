import React from 'react';
import {connect} from 'react-redux';
import {makeProfileImageSelector, makeCurrentUserSelector} from "../../ducks/posts";

const mapState = (state, ownProp) => {
    const profileImageSelector = makeProfileImageSelector(ownProp.postId);
    const currentUserSelector = makeCurrentUserSelector(ownProp.postId);

    return {
        profileImage: profileImageSelector(state),
        currentUser: currentUserSelector(state)
    };
};

export const Avatar = connect(mapState, {})((props) => {
    const {profileImage, currentUser} = props;
    
    if(!currentUser) {
        return <img className="avatar" src={profileImage} alt="profile avatar"/>;
    }
    return <div className="avatar current-user">
            <img src={'./images/better-icon.svg'} alt="user avatar"/>
        </div>;
}
);