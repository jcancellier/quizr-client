import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { AppHeader } from '../../global/components';
import { JoinQuizContainer, Header, Content, Footer, Divider, JoinQuizForm } from './style';
import { Typography, TextField, Button } from '@material-ui/core';

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

    console.log('clicked');
    
    const { connection, user } = this.props;

    // connect to group
    connection.invoke("AddUserToRoom", user.name, this.state.roomNumberInputText)
      .then((room) => {
        console.log(room)
        this.setState({ submitJoinQuizFormError: false })
      })
      .catch((err) => {
        this.setState({ submitJoinQuizFormError: true })
      });
  }

  render() {
    return (
      <Fragment>
        <AppHeader buttons={false} />
        <JoinQuizContainer>
          <Header>
            <Typography variant={'h4'} style={{ fontSize: 'calc(16px + 3vw)' }}>Welcome <strong><em>{this.props.user.name}</em></strong></Typography>
            <Typography varian={'p'} style={{ fontSize: 'calc(12px + 0.5vw)' }}>Enter a room # below to get started</Typography>
          </Header>

          <Content>
            <JoinQuizForm>
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
    connection: state.server.hubConnection
  }
}

const JoinQuizPage = connect(mapStateToProps)(JoinQuiz)

export { JoinQuizPage };
