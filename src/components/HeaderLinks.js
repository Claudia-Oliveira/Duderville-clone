import styles from './HeaderLinks.module.scss';

import React, { Component } from 'react';
import Button from './Button';
import classNames from 'classnames';
import ActiveLink from './ActiveLink';

export default class HeaderLinks extends Component {
    render() {
        const { t } = this.props;
        let pathname = this.props.pathname;
        // eslint-disable-next-line no-console
        console.log('pathname', pathname);

        const isCurrentClassNameUl = pathname === '/' ? styles.header__links_current : styles.header__links_default;
        const isCurrentClassNameLi = pathname === '/' ? styles.header__links_current_li : styles.header__links_default_li;
        return (
            <ul className={classNames(styles.header__links, isCurrentClassNameUl, classNames)}>
                {t('header-links:navigation', { returnObjects: true }).map((item) => {
                    return (
                        <li key={item.button.copy} className={classNames(isCurrentClassNameLi)}>
                            {pathname === '/' ? (
                                <Button href={item.button.href} className={styles.header__links_home_buttons}>
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
