import React from 'react';
import { useRouter } from 'next/router';
import Button from './Button';
import styles from './ActiveLink.module.scss';
import classNames from 'classnames';

const ActiveLink = ({ children, href }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <Button href={href} onClick={handleClick} className={classNames(styles.active_link, { [styles.is_active]: router.asPath === href })}>
            {children}
        </Button>
    );
};

export default ActiveLink;
