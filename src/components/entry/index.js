import React from 'react';
import {connect} from 'react-redux';
import {enterMessage} from "../../ducks/messageEntry";
import {submitPost} from "../../ducks/posts";
import classnames from 'classnames';

const mapState = (state) => ({
    value: state.getIn(['messageEntry', 'value']),
    characterCount: state.getIn(['messageEntry', 'characterCount'])
});

export const MessageEntry = connect(mapState, {enterMessage, submitPost})((props) => {
    const {value, characterCount} = props;

    const changeHandler = (event) => {
        props.enterMessage(event.target.value);
    };

    const submitHandler = () => {
        if(characterCount >= 0) {
            props.submitPost(value);
        }
    }

    const countClass = classnames({
        'character-count': true,
        'count-pos': characterCount >= 0,
        'count-neg': characterCount < 0
    })

    const buttonClass = classnames({
        'send-button': true,
        'disabled': characterCount < 0
    });

    return <div className="message-entry-container">
            <div className={countClass}>{characterCount}</div>
            <textarea
                {...{value}}
                rows={3}
                className="new-post-text"
                name="new_post_text"
                placeholder="what's happening?"
                onChange={changeHandler}
            >
            </textarea>
            <button className={buttonClass} onClick={submitHandler}>
                <i className="material-icons">send</i>
            </button>
        </div>;
});