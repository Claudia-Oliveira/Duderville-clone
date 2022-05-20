import React, { Component, createRef } from 'react';
import styles from './CanvasCustomCursor.module.scss';

// create a custom cursor inside the canvas
export default class CanvasCustomCursor extends Component {
    el = createRef();

    state = {
        index: 0,
        onPreloaderCompleted: true
    };

    componentDidMount() {
        this._setupCanvas();
        this._renderCursor();
        this._getPosition();
        this._setMousePosition();
        this._initCursor();
        this._setSize();
    }

    componentWillUnmount() {
        this._removeEventListeners();
    }

    render() {
        return <div className={styles.container}>{this.state.onPreloaderCompleted && <canvas ref={this.el} className={styles.canvas} onMouseMove={this._setMousePosition}></canvas>}</div>;
    }

    _setupCanvas() {
        this._canvas = this.el.current;
        this._context = this._canvas.getContext('2d');
        console.log('canvas setup');
    }

    _initCursor() {
        this._canvas.addEventListener('mousemove', this._setMousePosition, false);
    }

    _setMousePosition = (e) => {
        this._clientX = e.clientX;
        this._clientY = e.clientY;
        console.log(this._clientX, this._clientY);
    };

    _setSize() {
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this._canvas.width = this._width;
        this._canvas.height = this._height;
    }
    _renderCursor() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._context.beginPath();
        this._context.arc(this._clientX, this._clientY, 20, 0, 2 * Math.PI);
        this._context.fillStyle = '#000';
        this._context.fill();
        console.log('cursor rendered');
    }

    _getPosition = (el) => {
        let xPosition = 0;
        let yPosition = 0;

        while (el) {
            xPosition += el.offsetLeft - el.scrollLeft + el.clientLeft;
            yPosition += el.offsetTop - el.scrollTop + el.clientTop;
            el = el.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    };

    _removeEventListeners() {
        this._canvas.removeEventListener('mousemove', this._setMousePosition);
    }
}
