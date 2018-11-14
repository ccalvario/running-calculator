import React, {Component} from 'react';
import './DisplayTime.css';

class DisplayTime extends Component {

    handleSecondsChange(e) {
        let value = e.target.value;
        const hours =  Math.floor(this.props.time  / 3600);
        const minutes = Math.floor(this.props.time % 3600 / 60);
        //const seconds = Math.floor(this.props.time % 3600 % 60);
        if(isNaN(value)) {
            return;
        }
        let time = Number(hours * 3600) + Number(minutes * 60) + Number(value);
        this.props.onChange(time);
    }

    handleMinutesChange(e) {
        const hours =  Math.floor(this.props.time  / 3600);
        //const minutes = Math.floor(this.props.time % 3600 / 60);
        const seconds = Math.floor(this.props.time % 3600 % 60);
        const value = e.target.value;
        if(isNaN(value)) {
            return;
        }
        let time = Number(hours * 3600) + Number(value * 60) + Number(seconds);
        this.props.onChange(time);
    }

    handleHoursChange(e) {
        //const hours =  Math.floor(this.props.time  / 3600);
        const minutes = Math.floor(this.props.time % 3600 / 60);
        const seconds = Math.floor(this.props.time % 3600 % 60);
        const value = e.target.value;
        if(isNaN(value)) {
            return;
        }
        let time = value * 3600 + minutes * 60 + seconds;
        this.props.onChange(time);
    }

    render() {
        const hours =  Math.floor(this.props.time  / 3600);
        const minutes = Math.floor(this.props.time % 3600 / 60);
        const seconds = Math.floor(this.props.time % 3600 % 60);
        
        let hoursInput = <input type="text" className="form-control display-time"
                            placeholder="0"
                            onChange={(e) => this.handleHoursChange(e)}
                            value={hours}
                            maxLength="2" />;

        return (
            <div className="display">
                <div>
                    <div className="display-label">
                        {this.props.showHours ? <div>H</div> : null}
                        <div>M</div>
                        <div>S</div>
                    </div>

                </div>
                <div>
                    <div className="display-row">
                        {this.props.showHours ? hoursInput : null}
                        <input type="text" className="form-control display-time"
                            placeholder="0"
                            onChange={(e) => this.handleMinutesChange(e)}
                            value={minutes} 
                            maxLength="2"/>
                        <input type="text" className="form-control display-time"
                            placeholder="0"
                            onChange={(e) => this.handleSecondsChange(e)}
                            value={seconds}
                            maxLength="2" />
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayTime;