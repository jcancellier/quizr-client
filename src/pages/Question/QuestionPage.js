import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    return (
      <div>
        <p>Question Page</p>
      </div>
    );
  }
}

const QuestionPage = connect()(Question);

export { QuestionPage };