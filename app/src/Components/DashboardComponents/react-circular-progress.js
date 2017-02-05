import React, { Component } from 'react';

class CircularProgress extends Component {

    render() {
        const radius = this.props.radius - this.props.strokeWidth / 2;
        const width = this.props.radius * 2;
        const height = this.props.radius * 2;
        const viewBox = `-10 -10 ${width + 20} ${height + 20}`;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * this.props.percentage / 100;

        return (
            <svg
                className="CircularProgress"
                width={this.props.radius * 2}
                height={this.props.radius * 2}
                viewBox={viewBox}>
                <circle
                    className="CircularProgress-Bg"
                    cx={this.props.radius}
                    cy={this.props.radius}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`} />
                <circle
                    className="CircularProgress-Fg"
                    cx={this.props.radius}
                    cy={this.props.radius}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }} />
                <text
                    className="CircularProgress-Text"
                    id="circ-text-curr"
                    x={this.props.radius - 50}
                    y={this.props.radius - 55}
                    dy=".4em"
                    textAnchor="middle">
                    {this.props.currentBlock}
                </text>
                <line
                    className="CircularProgress-Text"
                    id="circ-text-midl"
                    x1="80px"
                    y1="200px"
                    x2="220px"
                    y2="100px"
                    dy=".4em">
                    /
                </line>
                <text
                    className="CircularProgress-Text"
                    id="circ-text-high"
                    x={this.props.radius + 50}
                    y={this.props.radius + 55}
                    dy=".4em"
                    textAnchor="middle">
                    {this.props.highestBlock}
                </text>
            </svg>
        );
    }
}

CircularProgress.defaultProps = {
    radius: 150,
    percentage: 50,
    strokeWidth: 1
};

export default CircularProgress;
