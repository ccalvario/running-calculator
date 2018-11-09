import React, {Component} from 'react';
import DisplayTime from './DisplayTime';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: 5000,
            time: 0,
            pace: 0,
        }
    }

    calculatePace(distance, time){
        return time * 1000 / distance;
        
    }

    calculateTime(distance, pace) {
        return distance * pace / 1000;
    }

    handleTimeChange(time){
        const newTime = time;
        console.log(newTime);

        if(!isNaN(newTime)) {
            this.setState({
                time: newTime,
                pace: this.calculatePace(this.state.distance, newTime),
            });
        } 
    }

    handlePaceChange(pace) {
        const newPace = pace;
        if(!isNaN(newPace)) {
            this.setState({
                pace: newPace,
                time: this.calculateTime(this.state.distance, newPace),
            });
        }
    }

    render() {
        
        return (
            <div>
                <p>Distance: { this.state.distance }</p>
                <p>Time: </p>
                <DisplayTime
                time={this.state.time}
                onChange= {(e) => this.handleTimeChange(e)}
                />
                <p>Pace: {this.state.pace}</p>
                <DisplayTime
                time={this.state.pace}
                onChange= {(e) => this.handlePaceChange(e)}
                />
            </div>
        );
    }

}

export default Board;