import React, {Component} from 'react';
import './DisplayTime.css';

class DisplayTime extends Component {
    constructor(props) {
        super(props);
        const hours =  Math.floor(props.time  / 3600);
        const minutes = Math.floor(props.time % 3600 / 60);
        const seconds = Math.floor(props.time % 3600 % 60);
        console.log("display cosnt " + props.time);
        this.state = {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }
    }

    handleSecondsChange(e) {
        const value = e.target.value;
        if(!isNaN(value)) {
            this.setState({
                seconds: value,
            })
        }
        let time = Number(this.state.hours * 3600) + Number(this.state.minutes * 60) + Number(value);
        console.log("display " + time);
        this.props.onChange(time);
    }

    handleMinutesChange(e) {
        const value = e.target.value;
        if(!isNaN(value)) {
            this.setState({
                minutes: value,
            })
        }
        let time = Number(this.state.hours * 3600) + Number(value * 60) + Number(this.state.seconds);
        this.props.onChange(time);
    }

    handleHoursChange(e) {
        const value = e.target.value;
        if(!isNaN(value)) {
            this.setState({
                hours: value,
            })
        }
        let time = value * 3600 + this.state.minutes * 60 + this.state.seconds;
        this.props.onChange(time);
    }

    render() {
        const hours =  Math.floor(this.props.time  / 3600);
        const minutes = Math.floor(this.props.time % 3600 / 60);
        const seconds = Math.floor(this.props.time % 3600 % 60);
        
        let hoursInput = <input type="number" className="form-control display-time"
                            placeholder="0"
                            onChange={(e) => this.handleHoursChange(e)}
                            value={hours} />;

        return (
            <div>
                {this.props.showHours ? hoursInput : null}
                <input type="number" className="form-control display-time"
                    placeholder="0"
                    onChange={(e) => this.handleMinutesChange(e)}
                    value={minutes} />
                <input type="number" className="form-control display-time"
                    placeholder="0"
                    onChange={(e) => this.handleSecondsChange(e)}
                    value={seconds} />
            </div>
        );
    }
}

export default DisplayTime;