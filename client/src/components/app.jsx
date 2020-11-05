/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import HomePage from './home.jsx';
import Hangout from './hangouts.jsx';
import SeeThoughts from './seeThoughts.jsx';
import SpillTea from './spillTea.jsx';
import classes from '../css/styles.css';

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
        <div className={classes.navBarBox}>
          <div onClick={() => { this.changePage('home'); }} className={classes.imgDiv}>
            <img src="https://lets-talk-environment.s3-us-west-1.amazonaws.com/logos/logo.png" alt="letsTalkLogo" className={classes.logo} />
          </div>
          <div className={classes.navBar}>
            <button className={classes.menuBtn} onClick={() => { this.changePage('home'); }} type="button">Home</button>
            <button className={classes.menuBtn} onClick={() => { this.changePage('hangout'); }} type="button">Hangout</button>
            <button className={classes.menuBtn} onClick={() => { this.changePage('thoughts'); }} type="button">See Thoughts</button>
            <button className={classes.menuBtn} onClick={() => { this.changePage('spillTea'); }} type="button">Let's Have Tea</button>
          </div>
        </div>
        <div>
          {page}
        </div>
      </div>
    );
  }
}

export default App;
