import React, {Component} from 'react';
import './DisplayDistance.css';

class DisplayDistance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: props.distance,
        };
    }

    handleDistanceChange(e) {
        const value = e.target.value;
        if(!isNaN(value)) {
            this.setState({
                distance: value,
            })
        }
        this.props.onChange(value);
    }

    render() {
        return (
            <div>
                <input type="number" className="form-control display-distance"
                    placeholder="0"
                    onChange={(e) => this.handleDistanceChange(e)}
                    value={this.state.distance} />
            </div>
        );
    }
}

export default DisplayDistance;