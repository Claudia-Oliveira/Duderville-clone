import React, { Component, createRef } from 'react';

export default class Canvas extends Component {
    el = createRef();

    state = {
        index: 0,
        onPreloaderCompleted: true
    };

    componentDidMount() {
        this._setupCanvas();
        this._draw();
    }

    render() {
        return <div>{this.state.onPreloaderCompleted && <canvas ref={this.el} width="800px" height="800px" />}</div>;
    }

    _setupCanvas() {
        this._canvas = this.el.current;
        this._context = this._canvas.getContext('2d');
    }

    _draw() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

        this._context.beginPath();
        this._context.arc(75, 75, 50, 50, true); // Círculo exterior
        this._context.moveTo(110, 75);
        this._context.arc(75, 75, 35, 0, Math.PI, false); // Boca (sentido horário)
        this._context.moveTo(65, 65);
        this._context.arc(60, 65, 5, 0, Math.PI * 2, true); // Olho esquerdo
        this._context.moveTo(95, 65);
        this._context.arc(90, 65, 5, 0, Math.PI * 2, true); // Olho direito
        this._context.stroke();
    }
}
