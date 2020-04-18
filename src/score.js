import React from 'react';
import ReactDOM from 'react-dom';


class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = { team1: 0, team2: 0 };
        this.handleTeam1 = this.handleTeam1.bind(this);
        this.handleTeam2 = this.handleTeam2.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleTeam1 () {
        this.setState(state => ({
            team1: state.team1 + 1,
          }));
    }

    handleTeam2 () {
        this.setState(state => ({
            team2: state.team2 + 1,
          }));
    }

    handleReset () {
        this.setState(state => ({
            team1: 0,
            team2: 0
          }));
    }

    render() {
        return (
            <React.Fragment>
            <div class="container">
            <h1>Team Scores:</h1>
            <p>Team 1 Score: {this.state.team1}   Team 2 Score: {this.state.team2}</p>
            <button onClick={this.handleTeam1}>
                Team 1 Point
            </button>
            <button onClick={this.handleTeam2}>
                Team 2 Point
            </button>
            <button onClick={this.handleReset}>
                Reset Points
            </button>
            </div>
            </React.Fragment>
        )
    }
}

export default Score