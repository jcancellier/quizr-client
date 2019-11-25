import React, { Component } from 'react';
import { connect } from 'react-redux';

class Prequestion extends Component {
  render() {
    return (
      <div>
        <p>Preparing Question</p>
      </div>
    );
  }
}

const PrequestionPage = connect()(Prequestion);

export { PrequestionPage };