import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostQuestion extends Component {
  render() {
    return (
      <div>
        <p>After Question</p>
      </div>
    );
  }
}

const PostQuestionPage = connect()(PostQuestion);

export { PostQuestionPage };