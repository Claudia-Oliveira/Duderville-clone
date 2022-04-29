import styles from './HeaderLinks.module.scss';

import React, { Component } from 'react';
import Button from './Button';

import ActiveLink from './ActiveLink';

export default class HeaderLinks extends Component {
    render() {
        const { t } = this.props;
        let pathname = this.props.pathname;
        // eslint-disable-next-line no-console
        console.log('pathname', pathname);

        return (
            <ul className={`links ${styles.header__links} `}>
                {t('header-links:navigation', { returnObjects: true }).map((item) => {
                    return (
                        <li key={item.button.copy} className={styles.item}>
                            {pathname === '/' ? <Button href={item.button.href}>{item.button.copy}</Button> : <ActiveLink href={item.button.href}>{item.button.copy}</ActiveLink>}
                        </li>
                    );
                })}
            </ul>
        );
    }
}
