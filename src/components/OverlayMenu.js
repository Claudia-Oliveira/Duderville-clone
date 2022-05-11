import styles from './OverlayMenu.module.scss';

import React, { Component } from 'react';
import Button from './Button';

import Navigation from './Navigation';

export default class Overlay extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className={styles.overlay}>
                <div>
                    <span>{t('navigation-bar:place')}</span>
                    <Button className={styles.menu_button}>
                        <svg viewBox="0 0 23 24" className={styles.button_icon}>
                            <path
                                fillRule="evenodd"
                                fill="rgb(255, 255, 255)"
                                d="M23.7,2.758 L13.943,11.822 L22.813,20.692 L20.692,22.813 L11.822,13.943 L2.501,23.264 L0.380,21.143 L9.701,11.822 L0.186,2.307 L2.307,0.186 L11.822,9.701 L20.886,0.637 L23.7,2.758 Z"
                            />
                        </svg>
                    </Button>
                </div>
                <Navigation t={t} />
            </div>
        );
    }
}
