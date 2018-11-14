import React, {Component} from 'react';
import DisplayTime from './DisplayTime';
import DisplayDistance from './DisplayDistance';
import './Board.css';
import { Container, Row, Col } from 'reactstrap';

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

        if(!isNaN(newTime)) {
            this.setState({
                time: newTime,
                pace: this.calculatePace(this.state.distance, newTime),
            });
        }
        console.log("****handleTimeChange " + time);
    }

    handlePaceChange(pace) {
        const newPace = pace;
        if(!isNaN(newPace)) {
            this.setState({
                pace: newPace,
                time: this.calculateTime(this.state.distance, newPace),
            });
        }
        console.log("****handlePaceChange " + pace);
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
            
            <Container className="board">
                <Row>
                    <Col xs="4" className="label">
                        Distance:
                    </Col>
                    <Col xs="auto">
                        <DisplayDistance
                            distance={this.state.distance}
                            onChange={(e) => this.handleDistanceChange(e)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="4" className="label">
                        Time:
                    </Col>
                    <Col xs="auto">
                        <DisplayTime
                            time={this.state.time}
                            showHours={true}
                            onChange={(e) => this.handleTimeChange(e)}
                        />
                    </Col>                    
                </Row>
                <Row>
                    <Col xs="4" className="label">
                        Pace:
                    </Col>
                    <Col xs="auto">
                        <DisplayTime
                            time={this.state.pace}
                            showHours={false}
                            onChange={(e) => this.handlePaceChange(e)}
                        />
                    </Col>                   
                </Row>
            </Container>
        );
    }
}

export default Board;