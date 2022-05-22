import React, { Component, createRef } from 'react';
import styles from './HouseCanvas.module.scss';

export default class Canvas extends Component {
    el = createRef();

    componentDidMount() {
        this._setupCanvas();
        this._draw();
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <canvas ref={this.el} width="300px" height="300px" className={styles.canvas} />
            </div>
        );
    }

    _setupCanvas() {
        this._canvas = this.el.current;
        this._context = this._canvas.getContext('2d');
    }

    _draw() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

        this.gradient = this._context.createLinearGradient(0, 0, 270, 270);

        this.gradient.addColorStop(0, 'red');
        this.gradient.addColorStop(0.25, 'orange');
        this.gradient.addColorStop(0.5, 'yellow');
        this.gradient.addColorStop(0.75, 'green');
        this.gradient.addColorStop(1, 'blue');
        this._context.fillStyle = this.gradient;
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);

        // Set line width
        this._context.lineWidth = 10;

        // Wall
        this._context.strokeRect(75, 140, 150, 110);
        this._context.fillStyle = 'pink';
        this._context.fillRect(80, 140, 140, 105);
        this._context.fill();

        // Door
        this._context.fillStyle = 'black';
        this._context.fillRect(130, 190, 40, 60);

        // Roof
        this._context.beginPath();
        this._context.moveTo(50, 140);
        this._context.lineTo(150, 60);
        this._context.lineTo(250, 140);
        this._context.fillStyle = 'brown';
        this._context.closePath();
        this._context.fill();
        this._context.stroke();
    }
}
