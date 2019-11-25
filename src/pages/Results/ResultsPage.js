import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  render() {
    return (
      <div>
        <p>Results Page</p>
      </div>
    );
  }
}

const ResultsPage = connect()(Results);

export { ResultsPage };