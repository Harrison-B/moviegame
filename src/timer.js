import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.starttime = 60
    this.state = {count: this.starttime, color: "green"}
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
          })
    }
    
    if (this.state.count == 10) {
      this.setState({
        color: "orange"
          })
    } else if (this.state.count == 0) {
      this.setState({
        color: "red"
          })
    }
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }
  resetTimer () {
    clearInterval(this.timer)
    this.setState({count: this.starttime, color: "green"})
  }
  render () {
    return (
      <div class="container">
        <h1>Timer:</h1>
        <h1 style={{color: this.state.color}}>{this.state.count}</h1>
        <div>
          <button onClick={this.startTimer.bind(this)}>Start</button>
          <button onClick={this.stopTimer.bind(this)}>Stop</button>
          <button onClick={this.resetTimer.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Timer