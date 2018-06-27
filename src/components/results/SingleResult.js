import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { makeSingleResultSelector } from '../../ducks/results';
import {
  addToFavoritesAction,
  removeFromFavoritesAction
} from '../../ducks/favorites';

const mapState = (state, ownProp) => {
  const singleResultSelector = makeSingleResultSelector(ownProp.id);
  return {
    result: singleResultSelector(state)
  };
};

export class SingleResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false
    };
  }

  handleClick = e => {
    const { dispatch, id, result } = this.props;
    const { favorited } = this.state;

    if (this.state.favorited) {
      dispatch({ type: removeFromFavoritesAction, id });
    } else {
      dispatch({ type: addToFavoritesAction, result });
    }

    this.setState({ favorited: !favorited });
  };

  render() {
    const { images, title } = this.props.result.toJS();
    const resultClasses = classnames({
      'single-result': true,
      favorited: this.state.favorited
    });

    return (
      <div className={resultClasses} onClick={this.handleClick}>
        <img src={images.preview_gif.url} alt={title} />
        <p>{title}</p>
      </div>
    );
  }
}

export default connect(mapState)(SingleResult);
