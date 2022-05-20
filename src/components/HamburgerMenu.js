import React, { Component } from 'react';
import styles from './HamburgerMenu.module.scss';
import Button from './Button';

export default class HamburgerMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    _handleClick() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        // const { showNavigation } = this.state;
        const { buttonHamburgerClicked } = this.props;

        return (
            <Button className={styles.menu_button} onClick={this._handleClick}>
                {buttonHamburgerClicked ? (
                    <svg className={styles.menu_button_icon} viewBox="0 0 22.81 23.062">
                        <path d="M5358.31,636.186l20.5,20.507-2.12,2.121-20.5-20.507Zm-1.93,20.957,20.51-20.506,2.12,2.122-20.51,20.506Z" transform="translate(-5356.19 -636.188)" />
                    </svg>
                ) : (
                    <svg className={styles.button_icon} viewBox="0 0 29 20">
                        <path fillRule="evenodd" fill="rgb(255, 255, 255)" d="M0.0,20.0 L0.0,16.999 L29.0,16.999 L29.0,20.0 L0.0,20.0 ZM0.0,0.0 L29.0,0.0 L29.0,2.999 L0.0,2.999 L0.0,0.0 Z" />
                    </svg>
                )}
            </Button>
        );
    }
}
