import React from 'react';
import { useRouter } from 'next/router';
import Button from './Button';

const ActiveLink = ({ children, href }) => {
    const router = useRouter();
    const style = {
        textDecoration: router.asPath === href ? 'line-through' : 'none',
        color: '#2d2d2d'
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <Button href={href} onClick={handleClick} style={style}>
            {children}
        </Button>
    );
};

export default ActiveLink;
