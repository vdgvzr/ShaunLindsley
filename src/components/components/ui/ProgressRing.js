import React, { Component } from "react";

class ProgressRing extends Component {
    constructor(props) {
      super(props);
      
      const { radius, stroke } = this.props;
      
      this.normalizedRadius = radius - stroke * 2;
      this.circumference = this.normalizedRadius * 2 * Math.PI;
    }
    
    render() {
      const { title, radius, stroke, progress } = this.props;
  
      const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
    
      return (
        <div className="progress-ring">
            <div className="progress-ring__progress">{progress}%</div>
            <svg
                height={radius * 2}
                width={radius * 2}
                className="mb-2"
            >
                <circle
                    stroke="#00fffb"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={this.circumference + ' ' + this.circumference}
                    style={{ strokeDashoffset }}
                    strokeWidth={stroke}
                    r={this.normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <p>{title}</p>
        </div>
      );
    }
  }

export default ProgressRing;