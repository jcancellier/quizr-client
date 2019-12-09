import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { ResultsPageContainer, Header, Content, Footer, ResultCardsContainer } from './style';
import { Typography, Button } from '@material-ui/core';
import ResultCard from './components/ResultCard';
import { joinquizRoutePath } from '../../routing';

class Results extends Component {

  _renderResultCards = () => {
    const { topThreeUsers } = this.props.quizResults;
    switch (topThreeUsers.length) {
      case 3:
        return (
          <React.Fragment>
            <ResultCard place="1st" userName={topThreeUsers[0].name} score={topThreeUsers[0].score} />
            <ResultCard place="2nd" userName={topThreeUsers[1].name} score={topThreeUsers[1].score} />
            <ResultCard place="3rd" userName={topThreeUsers[2].name} score={topThreeUsers[2].score} />
          </React.Fragment>
        )
      case 2:
        return (
          <React.Fragment>
            <ResultCard place="1st" userName={topThreeUsers[0].name} score={topThreeUsers[0].score} />
            <ResultCard place="2nd" userName={topThreeUsers[1].name} score={topThreeUsers[1].score} />
          </React.Fragment>
        )
      case 1:
        return (
          <ResultCard place="1st" userName={topThreeUsers[0].name} score={topThreeUsers[0].score} />
        )
    }
  }

  onTakeAnotherQuizButtonClick = () => {
    this.props.history.push(joinquizRoutePath);
  }

  render() {
    return (
      <ResultsPageContainer>
        <Header>
          <Content>
            <Typography variant={'h2'}>Results</Typography>
          </Content>
        </Header>
        <ResultCardsContainer>
          {this._renderResultCards()}
        </ResultCardsContainer>
        <Footer>
          <Button         
            variant='contained'
            color='primary'
            onClick={this.onTakeAnotherQuizButtonClick}
          >
            Take another quiz
          </Button>
        </Footer>
      </ResultsPageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizResults: state.quizRoom.results
  }
}

const ResultsPageComponent= connect(mapStateToProps)(Results);
const ResultsPage = withRouter(ResultsPageComponent);

export { ResultsPage };
