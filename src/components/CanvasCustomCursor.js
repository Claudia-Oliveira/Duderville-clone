import React, { Component, createRef } from 'react';
import styles from './CanvasCustomCursor.module.scss';
import gsap from 'gsap';
import { resizeManager } from '@superherocheesecake/next-resize-manager';

// create a custom cursor inside the canvas
export default class CanvasCustomCursor extends Component {
    el = createRef();
    wrapper = createRef();

    // the mouse position is relative to the canvas and starts at the top left corner
    _mouseXPosition = 0;
    _mouseYPosition = 0;

    componentDidMount() {
        this._setupCanvas();
        this._setupEventListeners();

        this._resize();
    }

    componentWillUnmount() {
        this._removeEventListeners();
        console.log('cc');
    }

    render() {
        return (
            <div className={styles.wrapper} ref={this.wrapper}>
                <canvas ref={this.el} className={styles.canvas}></canvas>
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
        // this._draw();
    }

    _setupCanvas() {
        this._canvas = this.el.current;
        this._context = this._canvas.getContext('2d');

        gsap.ticker.add(this._handleTick);

        console.log(this.context, 'context');
    }

    // the size of the canvas is set to the size of the wrapper
    _setSize() {
        this._width = this.wrapper.current.clientWidth;
        this._height = this.wrapper.current.clientHeight;

        this._canvas.width = this._width;
        this._canvas.height = this._height;
        // console.log(this._width);
    }

    // the client x and y position of the mouse is calculated and set to the private variables
    _setMousePosition = (e) => {
        this._mouseXPosition = e.clientX;
        this._mouseYPosition = e.clientY;
        // console.log('some', e.clientX, e.clientY);

        // the ticker is added to the gsap library to call the _tick function every frame
    };

    // the cursor is drawn using the mouse position
    _drawCursor() {
        this._context.beginPath();
        this._context.arc(this._mouseXPosition, this._mouseYPosition, 5, 0, 2 * Math.PI);
        this._context.fillStyle = 'red';
        this._context.fill();
        this._context.lineWidth = 5;
        this._context.strokeStyle = '#fff';
        this._context.stroke();
        this._context.closePath();
        console.log('cursor rendered');
    }

    // the ticker calls the _draw function every frame
    // _tick() {
    //     this._draw();
    // }

    _draw() {
        // console.log(this.context);
        this._context.clearRect(0, 0, this._width, this._height);
        this._drawCursor();
    }

    _handleMouseMove = (e) => {
        this._setMousePosition(e);
    };

    _resizeHandler = () => {
        this._resize();
    };

    _handleTick = () => {
        this._draw();
    };
}
