/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import HomePage from './home.jsx';
import Hangout from './hangouts.jsx';
import SeeThoughts from './seeThoughts.jsx';
import SpillTea from './spillTea.jsx';
import NavBar from './navBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      thoughts: '',
      editing: false,
      // Create a "SignedIn" state (true or false) Reset PAGE to be sign-in
    };
    this.handleThotChange = this.handleThotChange.bind(this);
    this.toggleEditThot = this.toggleEditThot.bind(this);
    // this.checkGoal = this.checkGoal.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    axios.get('/thoughts', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(result));
      }
    })
      .then((result) => {
        const { data } = result;
        this.setState({ thoughts: data });
      });
  }

  handleThotChange(thoughts) {
    this.setState({ thoughts });
  }

  toggleEditThot() {
    if (this.state.editing) {
      this.setState({ editing: false });
    } else {
      this.setState({ editing: true });
    }
    console.log(this.state.editing);
  }

  // checkGoal() {
  //   if (this.state.count >= this.state.goal) {
  //     alert('You\'ve reached your goal!');
  //     // function that generates prize
  //     // eslint-disable-next-line react/no-access-state-in-setstate
  //     const newGoal = this.state.goal * 100;
  //     this.setState({ goal: newGoal });
  //   }
  // }

  changePage(pageName) {
    this.setState({ page: pageName });
  }

  render() {
    let page;
    // If "signedIn" is true then home page, else signIn page
    if (this.state.page === 'home') {
      page = (
        <HomePage changePage={this.changePage} />
      );
    } else if (this.state.page === 'hangout') {
      page = (
        <Hangout />
      );
    } else if (this.state.page === 'thoughts') {
      page = (
        <SeeThoughts
          thoughts={this.state.thoughts}
          handleThotChange={this.handleThotChange}
        />
      );
    } else if (this.state.page === 'spillTea') {
      page = (
        <SpillTea
          toggleEditThot={this.toggleEditThot}
          editing={this.state.editing}
        />
      );
    }
    return (
      <div>
        <NavBar changePage={this.changePage} />
        <div>
          {page}
        </div>
      </div>
    );
  }
}

export default App;
