import React from 'react';
import ReactDOM from 'react-dom';
import Switch from "react-switch";

class RandNumApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nums: [], numsused: [], totalnum: 0, number: 0, color: 'green', team: 1, team1: 0, team2: 0, checked: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePress = this.handlePress.bind(this);
        this.handleTeam = this.handleTeam.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleTeam(input) {
        var temp;
        if (input == false) {
            temp = 1;
        } else {
            temp = 2;
        }

        this.setState(state => ({
            team: temp,
            checked: input
        }));
    }

    handleReset () {
        this.setState(state => ({
            team1: 0,
            team2: 0
          }));
    }

    handleSubmit() {
        var tempnums = []
        
        for (var i = 1; i <= this.state.totalnum ; i++) {
            var number = i;
            tempnums.push(number);
        }

        this.setState(state => ({
          nums: tempnums,
          numsused: [],
          color: "green",
          totalnum: this.state.totalnum
        }));
    }

    handleChange(e) {
        this.setState({ totalnum: e.target.value });
    }

    handlePress() {
        if (this.state.nums.length != 0) {
            if (this.state.team == 1) {
                this.setState({ team1: this.state.team1 + 1 })
            } else {
                this.setState({ team2: this.state.team2 + 1 })
            }

            var randnum = Math.floor(Math.random() * this.state.nums.length);

            var newnum = this.state.nums[randnum];

            var temparray = this.state.numsused;
            temparray.push(newnum);

            var temparray2 = this.state.nums;
            temparray2.splice(randnum,1);

            this.setState(state => ({ 
                number: newnum,
                nums: temparray2,
                numsused: temparray
            }));
        } else {
            this.setState(state => ({ 
                number: 0,
                color: "red"
            }));
        }
    }

    render() {
        return (
            <React.Fragment>
            <div class="container">
            <h1>Movie Number:</h1>
            <h1 style={{color: this.state.color}}> {this.state.number} </h1>
            <button onClick={this.handlePress}>New Number</button>
            <p>Numbers to be used: {this.state.nums.map((n, index) => (
                <span>{n}, </span>
            ))} </p>
            <p>Numbers already used: {this.state.numsused.map((n, index) => (
                <span>{n}, </span>
            ))} </p>
            
            <label htmlFor="new-num">
                Enter # of Movies
            </label>
            <input
                id="new-num"
                onChange={this.handleChange}
                value={this.state.totalnum}
            />
            <button onClick={this.handleSubmit}>
                Reset Numbers
            </button>
            </div>

            <div class="container">
            <h1>Team Scores:</h1>
            <p class="team-scores">Team 1 Score: <span>{this.state.team1}</span> Team 2 Score: <span>{this.state.team2}</span></p>
            <label>
                <span>Select which team is currently going</span>
                <div class="switch-cont"><p style={{color: '#3260a8' }}>Team 1 </p>
                <Switch 
                    onChange={this.handleTeam} 
                    checked={this.state.checked}
                    onColor="#b82a3f"
                    offColor="#3260a8"
                    uncheckedIcon={false}
                    checkedIcon={false}
                 /><p style={{color: '#b82a3f'}} > Team 2</p></div>
            </label>
            <button onClick={this.handleReset}>
                Reset Points
            </button>
            </div>
            </React.Fragment>
        )
    }
}

export default RandNumApp