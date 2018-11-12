import React, {Component} from 'react';
import DisplayTime from './DisplayTime';
import DisplayDistance from './DisplayDistance';
import './Board.css';

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

    handleDistanceChange(distance) {
        const newDistance = distance;
        if(!isNaN(newDistance)) {
            this.setState({
                distance: newDistance,
                pace: this.calculatePace(newDistance, this.state.time),
            });
        }
    }

    render() {
        
        return (
            
            <div className="board">
                <div class="row">
                    <p>Distance: </p>
                    <DisplayDistance
                        distance={this.state.distance}
                        onChange={(e) => this.handleDistanceChange(e)}
                    />
                </div>
                <div class="row">
                    <p>Time: </p>
                    <DisplayTime
                        time={this.state.time}
                        showHours={true}
                        onChange={(e) => this.handleTimeChange(e)}
                    />
                </div>
                <div class="row">
                    <p>Pace: </p>
                    <DisplayTime
                        time={this.state.pace}
                        showHours={false}
                        onChange={(e) => this.handlePaceChange(e)}
                    />
                </div>
            </div>
        );
    }
}

export default Board;