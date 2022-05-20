import styles from './OverlayMenu.module.scss';

import React, { Component } from 'react';

import Navigation from './Navigation';

export default class Overlay extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className={styles.overlay}>
                <div>
                    <span>{t('navigation-bar:place')}</span>
                </div>
                <Navigation t={t} />
            </div>
        );
    }
}
