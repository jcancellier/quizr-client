import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setQuizRoom, setIsAddingUserToQuizRoom, setQuizResults } from '../../redux/actions/QuizRoomActions';
import { AppHeader } from '../../global/components';
import { JoinQuizContainer, Header, Content, Footer, Divider, JoinQuizForm } from './style';
import { Typography, TextField, Button } from '@material-ui/core';
import { quizRoutePath } from '../../routing';

const minRoomNumberInputTextLength = 5;

class JoinQuiz extends Component {
  state = {
    roomNumberInputText: '',
    submitJoinQuizFormDisable: true,
    submitJoinQuizFormError: false
  }

  handleRoomNumberInputTextChange = (e) => {
    this.setState({ roomNumberInputText: e.target.value }, () => {
      this.validateFormFields();
    })
  }

  validateFormFields = () => {
    if (this.state.roomNumberInputText.length >= minRoomNumberInputTextLength) {
      this.setState({ submitJoinQuizFormDisable: false });
    } else {
      this.setState({ submitJoinQuizFormDisable: true });
    }
  }

  handleSubmitJoinQuizForm = (e) => {
    e.preventDefault();

    const { connection, user } = this.props;

    // connect to group
    this.props.setIsAddingUserToQuizRoom(true);
    connection.invoke("AddUserToRoom", user.name, this.state.roomNumberInputText)
      .then((room) => {
        this.props.setIsAddingUserToQuizRoom(false);
        this.props.setQuizRoom(room)
        this.setState({ submitJoinQuizFormError: false }, () => {
          this.props.history.push(quizRoutePath);
          this.props.setQuizResults(null);
        })
      })
      .catch((err) => {
        this.props.setIsAddingUserToQuizRoom(false);
        this.setState({ submitJoinQuizFormError: true })
      });
  }

  renderFormInputsOrReturnToQuizButton = () => {
    if (this.props.quizRoom == null) {
      return (
        <Fragment>
          <TextField
            id='room-number-input'
            label='Room #'
            value={this.state.roomNumberInputText}
            onChange={e => this.handleRoomNumberInputTextChange(e)}
            variant='outlined'
            error={this.state.submitJoinQuizFormError}
            helperText={this.state.submitJoinQuizFormError ? 'Unable to join room' : null}
          />
          <Divider />
          <Button
            variant='contained'
            color='primary'
            endIcon={null}
            disabled={this.state.submitJoinQuizFormDisable}
            onClick={this.handleSubmitJoinQuizForm}
            type="submit"
          >
            Join Room
          </Button>
        </Fragment>
      )
    }
    else {
      return (
        <Button
          variant='contained'
          color='primary'
          endIcon={null}
          onClick={(e) => { 
            e.preventDefault();
            this.props.history.push(quizRoutePath) 
          }}
          type="submit"
        >
          Rejoin Quiz
        </Button>
      )
    }
  }

  render() {
    return (
      <Fragment>
        <AppHeader buttons={false} />
        <JoinQuizContainer>
          <Header>
            <Typography variant={'h4'} style={{ fontSize: 'calc(16px + 3vw)' }}>Welcome <strong><em>{this.props.user.name}</em></strong></Typography>
            {
              !this.props.quizRoom &&
              <Typography variant={'body1'} style={{ fontSize: 'calc(12px + 0.5vw)' }}>Enter a room # below to get started</Typography>
            }
          </Header>

          <Content>
            <JoinQuizForm>
              {this.renderFormInputsOrReturnToQuizButton()}
            </JoinQuizForm>
          </Content>

          <Footer>

          </Footer>
        </JoinQuizContainer>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    connection: state.server.hubConnection,
    quizRoom: state.quizRoom.quizRoom
  }
}

const JoinQuizPage = withRouter(
  connect(mapStateToProps, {
    setQuizRoom,
    setIsAddingUserToQuizRoom,
    setQuizResults
  })(JoinQuiz)
)

export { JoinQuizPage };
