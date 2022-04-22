import React, { Component } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { isFunction } from 'utils/helpers';

export default class Button extends Component {
    render() {
        const { href, target, children, ...otherProps } = this.props;
        //console.log(this.props);

        if (href && target === '_blank') {
            return (
                <a className={classNames(styles.button, classNames)} href={href} target={target} onClick={this._handleClick} {...otherProps}>
                    {children}
                </a>
            );
        }

        if (href && target !== '_blank') {
            return (
                <Link href={href}>
                    <a className={classNames(styles.button, classNames)} onClick={this._handleClick} {...otherProps}>
                        {children}
                    </a>
                </Link>
            );
        }

        return (
            <button className={classNames(styles.button, classNames)} onClick={this._handleClick} {...otherProps}>
                {children}
            </button>
        );
    }

    _handleClick = (e) => {
        const { onClick } = this.props;
        if (isFunction(onClick)) {
            onClick(e);
        }
    };
}
