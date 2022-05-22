import styles from './Navigation.module.scss';

import React, { Component, createRef } from 'react';
import Button from './Button';
import classNames from 'classnames';
import { toRoman } from 'utils/NumberToRoman';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.revealRefs = createRef();
        this.revealRefs.current = [];
    }

    render() {
        const { t } = this.props;
        let pathname = this.props.pathname;

        //add refs to each list item
        return (
            <ul className={classNames(pathname === '/' ? styles.navigation : styles.navigation_pages)}>
                {t('navigation-bar:navigation', { returnObjects: true }).map((item, index) => {
                    return (
                        <li key={index} className={styles.navigation_item} ref={this._addToRefs} onMouseOver={this._handleMouseEnter}>
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

    _addToRefs = (el) => {
        if (el && !this.revealRefs.current.includes(el)) {
            this.revealRefs.current.push(el);
        }
        // console.log(this.revealRefs.current);
    };
}
