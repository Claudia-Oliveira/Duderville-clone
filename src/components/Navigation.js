import styles from './Navigation.module.scss';

import React, { Component } from 'react';
import Button from './Button';
import classNames from 'classnames';
import { toRoman } from 'utils/NumberToRoman';

export default class Navigation extends Component {
    render() {
        const { t } = this.props;
        let pathname = this.props.pathname;

        return (
            <ul className={classNames(pathname === '/' ? styles.navigation : styles.navigation_pages)}>
                {t('navigation-bar:navigation', { returnObjects: true }).map((item, index) => {
                    return (
                        <li key={index} className={styles.navigation_item}>
                            <Button className={classNames(styles.navigation_item, pathname === item.button.href ? styles.is_active_path : styles.home_links)} href={item.button.href}>
                                <span>
                                    {toRoman(index + 1)}. {item.button.copy}
                                </span>
                            </Button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
