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
      count: 0,
      goal: 100,
      page: 'home',
      thoughts: '',
    };
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleThotChange = this.handleThotChange.bind(this);
    this.checkGoal = this.checkGoal.bind(this);
    this.getPrize = this.getPrize.bind(this);
    this.resetState = this.resetState.bind(this);
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

  handleGoalChange(event) {
    this.setState({ goal: event.target.value });
    this.checkGoal();
  }

  handleCountChange(newCount) {
    console.log(this.state.count);
    // function that illustrates progress
    this.setState({ count: newCount });
    this.checkGoal();
  }

  handleThotChange(thoughts) {
    this.setState({ thoughts });
    console.log(this.state.thoughts);
  }

  checkGoal() {
    if (this.state.count >= this.state.goal) {
      alert('You\'ve reached your goal!');
      // function that generates prize
      // eslint-disable-next-line react/no-access-state-in-setstate
      const newGoal = this.state.goal * 100;
      this.setState({ goal: newGoal });
    }
  }

  getPrize() {
    axios.get('/prizes', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }

  resetState() {
    this.setState({ goal: 100 });
    this.setState({ count: 0 });
  }

  changePage(pageName) {
    this.setState({ page: pageName });
  }

  render() {
    let page;
    // const currentPage = this.state.page;
    // console.log(currentPage);
    // console.log(this.state.count);
    if (this.state.page === 'home') {
      page = (
        <HomePage />
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
          handleCountChange={this.handleCountChange}
          handleGoalChange={this.handleGoalChange}
          resetState={this.resetState}
        />
      );
    }
    return (
      <div>
        <div className={classes.navBarBox}>
          <h2>Let's Talk</h2>
          <div className={classes.navBar}>
            <button className={classes.menuBtn} onClick={() => { this.changePage('home'); }} type="button">Home</button>
            <button className={classes.menuBtn} onClick={() => { this.changePage('hangout'); }} type="button">Hangout</button>
            <button className={classes.menuBtn} onClick={() => { this.changePage('thoughts'); }} type="button">See Thoughts</button>
            <button className={classes.menuBtn} onClick={() => { this.changePage('spillTea'); }} type="button">Spill Tea</button>
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
