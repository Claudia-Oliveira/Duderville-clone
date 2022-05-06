import styles from './NavigationBar.module.scss';

import React, { Component } from 'react';
import Button from './Button';
import classNames from 'classnames';
import ActiveLink from './ActiveLink';

export default class NavigationBar extends Component {
    render() {
        const { t } = this.props;
        let pathname = this.props.pathname;
        // eslint-disable-next-line no-console
        // console.log('pathname', pathname);

        const isCurrentClassNameUl = pathname === '/' ? styles.navigation_bar__current : styles.navigation_bar__default;
        const isCurrentClassNameLi = pathname === '/' ? styles.navigation_bar__current_li : styles.navigation_bar__default_li;
        return (
            <ul className={classNames(styles.navigation_bar_, isCurrentClassNameUl, classNames)}>
                {t('navigation-bar:navigation', { returnObjects: true }).map((item) => {
                    return (
                        <li key={item.button.copy} className={classNames(isCurrentClassNameLi)}>
                            {pathname === '/' ? (
                                <Button href={item.button.href} className={styles.navigation_bar__home_buttons}>
                                    {item.button.copy}
                                </Button>
                            ) : (
                                <ActiveLink href={item.button.href}>{item.button.copy}</ActiveLink>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    }
}
