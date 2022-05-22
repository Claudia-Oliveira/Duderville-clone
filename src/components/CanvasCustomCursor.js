import React, { Component, createRef } from 'react';
import styles from './CanvasCustomCursor.module.scss';
import gsap from 'gsap';
import { resizeManager } from '@superherocheesecake/next-resize-manager';

// create a custom cursor inside the canvas
export default class CanvasCustomCursor extends Component {
    canvas = createRef();
    wrapper = createRef();

    _mouseXPosition = 0;
    _mouseYPosition = 0;

    componentDidMount() {
        this._setupEventListeners();
        this._setupCanvas();
        this._resize();
    }

    componentWillUnmount() {
        this._removeEventListeners();
    }

    render() {
        return (
            <div className={styles.wrapper} ref={this.wrapper}>
                <canvas ref={this.canvas} className={styles.canvas}></canvas>
            </div>
        );
    }

    _setupEventListeners() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);

        window.addEventListener('mousemove', this._handleMouseMove);
    }

    _removeEventListeners() {
        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);

        window.removeEventListener('mousemove', this._handleMouseMove);
        gsap.ticker.remove(this._handleTick);
    }

    _resize() {
        this._setSize();
        this._draw();
    }

    _setupCanvas() {
        this.canvas = this.canvas.current;
        this.context = this.canvas.getContext('2d');
    }

    _setSize() {
        this._width = this.wrapper.current.clientWidth;
        this._height = this.wrapper.current.clientHeight;

        this.canvas.width = this._width;
        this.canvas.height = this._height;
        // console.log(this._width);
    }

    _setMousePosition = (e) => {
        this._mouseXPosition = e.clientX;
        this._mouseYPosition = e.clientY;
        // console.log('some', e.clientX, e.clientY);

        gsap.ticker.add(this._handleTick);
    };

    _renderCursor() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.context.arc(this._mouseXPosition, this._mouseYPosition, 5, 0, 2 * Math.PI);
        this.context.fillStyle = 'red';
        this.context.fill();
        this.context.lineWidth = 5;
        this.context.strokeStyle = '#fff';
        this.context.stroke();
        this.context.closePath();
        // console.log('cursor rendered');
    }

    _tick() {
        this._draw();
    }

    _draw() {
        this._renderCursor();
    }

    _handleMouseMove = (e) => {
        this._setMousePosition(e);
    };

    _resizeHandler = () => {
        this._resize();
    };

    _handleTick = () => {
        this._tick();
    };
}
