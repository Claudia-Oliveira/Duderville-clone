/* eslint-disable no-console */
import styles from './Header.module.scss';

import React, { Component } from 'react';
import Button from './Button';

import Navigation from './Navigation';
import HamburgerMenu from './HamburgerMenu';

import { resizeManager } from '@superherocheesecake/next-resize-manager';

import { isMediaQueryNarrow, isMediaQueryRegular } from 'utils/DeviceUtil';
import { isFunction } from 'utils/helpers';

export default class Header extends Component {
    state = {
        isNarrow: true
    };

    componentDidMount() {
        this._setupEventListeners();
        this._resize();
    }

    componentWillUnmount() {
        this._removeEventListeners();
    }

    render() {
        const { t, fragment } = this.props;
        let pathname = this.props.router.pathname;
        const { isNarrow } = this.state;
        // console.log(t('header', { returnObjects: true }));
        const showNavigation = isNarrow ? false : fragment === '/' ? false : true;

        return (
            <nav className={styles.header}>
                {this.state.isNarrow && (
                    <div className={`${styles.header__mobile} ${styles.header__is_narrow}`}>
                        <div className={styles.header__mobile_logo_copy}>
                            <Button href="/">
                                <svg className={styles.header__mobile_logo_feathers} viewBox="0 0 32 46.376">
                                    <path
                                        id="feathers"
                                        fill="#2c2c2c"
                                        fillRule="evenodd"
                                        d="M3890.62,649.217a14.387,14.387,0,0,1-1.1-2.226,8.6,8.6,0,0,1,.01-2.447c-0.02-.075.19-1.393-2.79-4.238s-3.08-3.165-3.27-3.8a5.4,5.4,0,0,0,2.39,1.2s-6.92-4.821-6.4-6.665a2.687,2.687,0,0,0,1.95,1.366,8.988,8.988,0,0,1-3.27-8.6s8.11-.428,10.54,6.18a3.234,3.234,0,0,1,.62-1.177s3.96,2.361,7.1,11.707c0,0,2.04,5.648-.35,10.146a10.723,10.723,0,0,0-.94,2.622l-0.22,1.861a2.426,2.426,0,0,1-.98.3,6.475,6.475,0,0,1,.14-1.975C3894.22,651.232,3892.37,649.23,3890.62,649.217Zm3.67,0.2c0.25-11.3-12.44-21.771-12.44-21.771,2.42,3.7,10.38,8.964,12.44,21.771h0Zm0,0,11.84,15.985a14.214,14.214,0,0,0,.34-2.114,6.619,6.619,0,0,0-.55-1.7c-0.01-.057-0.45-0.926.99-3.572s1.43-2.891,1.42-3.378a3.931,3.931,0,0,1-1.4,1.369s3.74-4.9,2.96-6.069a1.953,1.953,0,0,1-1.04,1.386,6.59,6.59,0,0,0,.35-6.712s-5.74,1.523-5.95,6.661a2.311,2.311,0,0,0-.7-0.678s-2.22,2.53-2.32,9.732c0,0-.15,4.385,2.52,6.976a11.339,11.339,0,0,1,.93,1.147c0.13,0.249.88,1.708,0.88,1.708a1.762,1.762,0,0,0,.75-0.011,4.026,4.026,0,0,0-.54-1.342C3904.35,667.867,3904.84,665.523,3906.13,665.4Zm-2.43.644c-2.7-7.8,3.77-17.927,3.77-17.927-0.85,3.118-5.21,8.561-3.77,17.927h0Zm0,0"
                                        transform="translate(-3878 -623.812)"
                                    />
                                </svg>
                            </Button>
                            <span className={styles.header__mobile_copy}>{t('header:mobile__copy')}</span>
                        </div>

                        {/* if button is clicked show Navigation */}

                        <HamburgerMenu onClick={this._handleClick} showNavigation={showNavigation} />
                        {/* <Button className={styles.header__menu_button} onClick={this._handleClick}>
                            {showNavigation ? (
                                <svg className={styles.header__menu_button_icon} viewBox="0 0 22.81 23.062">
                                    <path d="M5358.31,636.186l20.5,20.507-2.12,2.121-20.5-20.507Zm-1.93,20.957,20.51-20.506,2.12,2.122-20.51,20.506Z" transform="translate(-5356.19 -636.188)" />
                                </svg>
                            ) : (
                                <svg className={styles.header__menu_button_icon} viewBox="0 0 29 20">
                                    <path
                                        fillRule="evenodd"
                                        fill="rgb(255, 255, 255)"
                                        d="M0.0,20.0 L0.0,16.999 L29.0,16.999 L29.0,20.0 L0.0,20.0 ZM0.0,0.0 L29.0,0.0 L29.0,2.999 L0.0,2.999 L0.0,0.0 Z"
                                    />
                                </svg>
                            )}
                        </Button> */}
                    </div>
                )}

                <div className={`${styles.header__desktop} ${styles.header__is_wide}`}>
                    <span className={styles.header__desktop_copy}>{t('header:desktop__copy')}</span>
                    {pathname === '/' ? (
                        <svg className={styles.header__logo_bird} viewBox="0 0 46.46 79.59">
                            <path
                                d="M46.09 27.63c-1.76-14-4.61-20.45-6.29-23.16C38 1.6 35.94-.17 32.72 0a6.39 6.39 0 00-6 4.25 5.14 5.14 0 01-2.53 3c-1.79.78-2.65 2.05-2.58 3.41h2.45a9.91 9.91 0 014.32.56 13.37 13.37 0 002.64.9h.07a8.17 8.17 0 003.33-.42c2.56 2.26 2.94 6.5 3.24 9.22.55 5-1.32 9.38-2.32 9.38a36.57 36.57 0 00-23.12 9 26.32 26.32 0 00-8.06 13.37A15.32 15.32 0 010 57a17.86 17.86 0 003.39 0c0 .56-2.77 1.11-2.77 1.11s6.66 3.93 13 1.36c3 3.18 6.6 5.16 7.2 6.27.2.38 1.29 1.77 1.17 2.47-.29 1.5-.55 4.27-.58 4.86s-1.7.83-2.36 1.16c-.41.2.77.33 1.54 1.66s1 3.35 2 3.75c1.37-.4 1.32-1.22 3.42-.67a5.25 5.25 0 004-.77s-.56-.33-.56-.44c0-.35 1.11-.44 1.55-.55s-1.66-.55-1.66-.55a5.78 5.78 0 011.66-.6c1.11-.22 3-.11 4-.77-.34-.34-.73-.2-.56-.45.33-.48 1.55-.55.78-.77-1.52-.43-3.77-.56-5.53-1.1-1.15-.36-1.11-.77-1.11-1.44a24.92 24.92 0 01.66-4c.22-.66 1.55-1.78 2.21-2.53s4.2-5.62 4.76-7.39c6.42-5 9.18-8 10-19.2a55 55 0 00-.18-10.81zM27.15 68.92a19.34 19.34 0 00-.2 3.39c0 .55-1.78.51-2.43.77s1.21.33 2 2a21.9 21.9 0 01-3.1-1.21c-.44-.22.44-5.52 1.19-6.31a14.26 14.26 0 001.69-2.62c.44.66.77.91.95 1.3a6.41 6.41 0 01-.09 2.7z"
                                fill="#000000"
                            />
                            <path
                                className={styles.cls2}
                                d="M34.45 47.79a7.17 7.17 0 00-.51.89 1.7 1.7 0 01.13-.64 1.49 1.49 0 01.25-.38s.25 0 .13.13zM34.71 47.54c-.11 0-.25-.13-.25-.13l.36-.5s.09.56-.11.63zM35 46.94c-.11 0 0-.38 0-.38a5.74 5.74 0 00.38-.64c0 .26-.27 1-.38 1zM39 49.56a16.21 16.21 0 002.17-5.38 3.59 3.59 0 01-2.06-.45 8.51 8.51 0 002.52-.23c.34-.12-.23 3.77-2.63 6.06zM31.11 60c-.47 1-1.29 2.51-1.74 3.56-.12.29.26.8.05 1a.86.86 0 01-1.32-.32c-.1-.24.47-.71.9-1.24a35.17 35.17 0 002.12-5.12c.2-.45.73-.43 1.54-1-.29.66-1.23 2.56-1.51 3.2zM28.79 65.71c-.12.69-.28 1.37-.39 2.06a23.59 23.59 0 00-.08 5.31 1.32 1.32 0 010 .28l-.54.24c-.2-.36-.45-.71-1-.44a.66.66 0 010-.14l.25-.11a.69.69 0 00.53-.73c0-1.44.16-5.08.19-6.52 0-.38.17-.48.65-.47s.43.24.38.52zM41.2 30.85a2.91 2.91 0 01-.49 1.06 2.81 2.81 0 01-.44.48c-.22-.25-.66-.57-.61-.72.22-.59-.19-.72-.51-1a2.89 2.89 0 01-.29-.3l1.23-1.31c.58.62 1.69.49 1.79 1.61-.34-.34-.59-.6-.68.13zM42.07 27.41v1.94c0 .06-.18.17-.19.16l-.32-.31a3.7 3.7 0 01-.93-.32.67.67 0 01-.19-.59c.15-.51.38-1 .59-1.52 1.55.14 1.55.14 1.56.89l-.51-.25zM42.54 24.84c0 .19-.48.71-.65.9-.16-.15-.4 0-.5-.19a15.3 15.3 0 010-2.14 1.58 1.58 0 011.1-.48c0 .82.09 1.05 0 1.91zM37.45 34.37c-.43 1-.45 1-1.21 1.07-.22-.89-.27-1.9-1.35-2.35 0-.66.64-.62 1-.64a3.38 3.38 0 011.18.37l-.72.6 1.08.95zM42.15 19.49a.54.54 0 01-.46.24.64.64 0 01-.3-.45c0-.26.08-.42-.19-.72a6 6 0 01-.82-1.74 4.11 4.11 0 001.49.15c.13.72.27 1.22.37 2a.9.9 0 01-.09.57zM35.85 39.37a12.74 12.74 0 01-1-1.54c-.41-.88-.74-1.8-1.1-2.7v-.33c.64.46 1.14.78 1.3 1.55a27.67 27.67 0 00.95 2.93l-.11.09zM39.72 33a7 7 0 01-1.38-.27 2.11 2.11 0 01-1-.77c-.1-.16.19-.57.3-.86l1.58.2c-.49.94.54 1 .47 1.7zM40.69 13.55c-.66-.22-1.22-.58-1.3.17 0 .44-.69-1.49-.87-2a4.81 4.81 0 01-.12-.72c.63.15 1.18.11 1.37.76h-.32c.42.57.79 1.15 1.24 1.77zM25.13 58.49a24.83 24.83 0 01-4 .58A45.79 45.79 0 0025.77 56a10.57 10.57 0 01-.64 2.53zM41.62 22.76a2 2 0 01-.24-1.6 3.21 3.21 0 00-.05-1h1c0 .37.09 1.33.12 1.75s-.57.69-.82.88z"
                            />
                            <path
                                className={styles.cls2}
                                d="M41 16.43h-.29l-.71-.15c.13-.2.29-.38.4-.59a1 1 0 00.15-.48c0-.09-.24-.26-.28-.23a2.2 2.2 0 00-.38.37s-.14 0-.14-.07c.07-.52.15-1 .23-1.57.18.08.46.13.51.26a9.49 9.49 0 01.4 1.28c.1.4.23.76.77.44.1.56-.2.71-.63.74zM38.59 10.52C37.84 10.21 37 10 36.88 9a3.2 3.2 0 00.54-.09c.38-.15.36-.16.43.3 0 .14.2.26.3.39l.6.83-.16.14zM35 35c-.82-.63-1.71-2-2.16-1.93a2 2 0 01.29-.36c.31-.27.91-.18 1.08-.27-.33.44-.22.69-.11.88s.39.2.44.33c.2.48.33.44.62.33 0 .08 0 .15.07.22-.07.24-.14.47-.23.8zM35.83 40.79a8.51 8.51 0 00-.67 1.21 3.35 3.35 0 00-1.33-1 1.63 1.63 0 00-.44 1c-.29-.45-.86-1.23-.55-1.43s.88-.11 1.54-.22a17.69 17.69 0 00-1.57-3.76c-.22-.36-.37-.47-.59-.82-.09-.13-.22-.34-.18-.42.36-.63-.18-1.51-.41-2.06 1 .12 1.76.88 1.53 1.77a3.4 3.4 0 00.69 2.63 8 8 0 001.94 2.29c.3.23.32.52 0 .86zM35.18 9.09a1.46 1.46 0 011.41-.91 2.71 2.71 0 00.95-.38c-.09.44-1.54 1.2-2.36 1.29zM33.67 5.93c-.35-.63-.61-1.11-1-1.74l1.39.68a1.43 1.43 0 01-.44 1.06zM28.94 73.66l1.93.89a2 2 0 01-1.93-.89zM30.12 75.71l-1.27-.81.09-.13c.42.27.84.54 1.27.8l-.09.14zM32.7 75.05l-1.49-.35v-.13l1.49.35v.13z"
                            />
                            <path
                                className={styles.cls2}
                                d="M43.05 43.05a13.31 13.31 0 01-.61 2.68 16.58 16.58 0 01-3.1 5.4 26.07 26.07 0 01-12 7.14c.17-.56 1-3.53 1-3.53A12.41 12.41 0 0033.72 49c.07-.17.09-.56 0-.46-1.85 3-4.25 4.66-5.21 4.87-.11.22.13-.9.22-1 .55-.24 1.32-.57 1.43-1.34.77 0 1-.55.79-1.19.87-.25 1-.9.54-1.4.77-.17 1-1.16.44-1.5a.9.9 0 00.44-1.49.8.8 0 00.33-1.37c.55-.22 1-.66.55-1.33.25-.1.88-.33.77-1 .77.66.85 1.11.29 2a3 3 0 00-.41 1.84 12.25 12.25 0 011.22-2.36 15.5 15.5 0 00.93-1.67c.45-.69.65-.67 1.35-.24a4.4 4.4 0 003.67.54l.38-.1c1.21-.32 1.69 0 1.57 1.24z"
                            />
                            <path
                                className={styles.cls2}
                                d="M34.07 48a1.7 1.7 0 00-.13.64 7.17 7.17 0 01.51-.89c.12-.13-.13-.13-.13-.13a1.49 1.49 0 00-.25.38zM34.82 46.91l-.36.5s.14.17.25.13.11-.63.11-.63zM35 46.56s-.11.35 0 .38.38-.76.38-1a5.74 5.74 0 01-.38.64zM41.64 43.5a8.51 8.51 0 01-2.52.23 3.59 3.59 0 002.06.45A16.21 16.21 0 0139 49.56c2.4-2.29 3-6.18 2.63-6.06zM41.84 26.31l.71-.9c.72 2.25-.71.9-.71.9zM28.32 74.6s-.66-.44-.77-.55.33 0 .33 0l.66.44-.22.11zM30.87 73.88l1.13.22s-1.23.1-1.08-.22zM22.59 73.54a8.54 8.54 0 00-.17 1 3.53 3.53 0 00.07.83 1.28 1.28 0 01-.29.07c-.2-.4-.49-.87-.42-1.22a46.61 46.61 0 00.68-6.87l.05-.08c.05-.08.92.16.9.31s-.54 4.38-.82 6zM25.47 77.11a11.37 11.37 0 01-2.23-1.17v-.15c.75.34 1.68.75 2.42 1.1-.12 0-.08.29-.22.22zM26.07 57.84c.23-1.08.63-4.28.71-5.28.41 1-.37 4.22-.71 5.28zM26.05 77.23c.06-.07.07-.18.17-.18a2 2 0 011.44.58l-1.61-.4zM23 76.91l-.55-.77.25-.14a7.5 7.5 0 01.55.77l-.22.11zM27.34 76.24l-1.18-.34.06-.11 1.16.3v.15zM24.18 78.23c-.25-.26-.5-.51-.74-.77l.18-.17c.18.18.62.62.75.79l-.19.15zM25.46 75.7l-1.07-.38.19-.06 1 .33c0 .07-.11.11-.11.11z"
                            />
                            <path
                                className={styles.cls2}
                                d="M28.25 53.57a69.62 69.62 0 01-4.12 11.1c-.08.13-.29.28-.33.44-.15.74.11 1.55-.22 1.77s-.85-.32-.88-.44c-.11-.56.44-1.33.82-2.12.23-.47 2.11-5.2 2.35-6.27a1.89 1.89 0 01.14.67 18.26 18.26 0 001.28-6.1c0-.24-.12-.47-.11-.7 0-.7.92-.81 1.05-.83.08.23.25.47.23.69a10.67 10.67 0 01-.21 1.79zM18.22 39.26a3.05 3.05 0 01-.69.4c-.49.28-1 .58-1.45.89a3.89 3.89 0 01-.4.18c.07.23.19.53-.39.5.37.48.08.76-.31 1A14.65 14.65 0 0011.26 46c-.44.59-.85 1.16-1.27 1.68a10.07 10.07 0 01-.65 1.14c-.41-.76-.11-.55.35-1.43s1.21-1.78 1.8-2.73c.29-.43 1.42-1.62 1.66-2a.52.52 0 01.16-.22c.87-.44 1.1-1.35 1.93-1.78.4-.21.77-.46 1.14-.69.12-.06.28-.16.27-.25-.06-.42.25-.51.69-.56.15 0 .37-.17.36-.28 0-.44.36-.56.77-.75a1 1 0 00.44-.33 2.2 2.2 0 011.67-.84 20.69 20.69 0 00-2.36 2.32zM27.22 50.89c-.66.11-.43.56-.66.66-.37-.25-1.75-.35-1.94-.7a3.78 3.78 0 00-2.3-1.49 28 28 0 00-3.8-1.21c-.47-.13-1-.15-1.42-.29a12.7 12.7 0 01-1.3-.57l-.16.07c-.25-.63 0-1 .7-.8a39.86 39.86 0 017.49 2.85 16.51 16.51 0 001.72.67c.42.17 2 .75 1.67.81zM18.8 39.86A2.75 2.75 0 0120.3 38c2.3-1.33 4.76-2.41 7.18-3.51.6-.27 1.2-.55 1.81-.76a11.43 11.43 0 011.43-.35 1.85 1.85 0 000 .23c-4.22 1.26-8.68 3.23-12 6.26zM13 55a4.38 4.38 0 01.24-.43c.44-.69.77-1.41 1.21-2a5.51 5.51 0 011.09-.93l.12.12A5.14 5.14 0 0113 55zM16.31 51.79c-.21.39-.47.76-.72 1.14h-.05a15.26 15.26 0 00.73-2 5.31 5.31 0 000-1.13c0-.41-.3-.88.12-1.19.09-.07 0-.31 0-.48.27 0 .47 0 .44.41a7.82 7.82 0 01-.56 3.29zM21.31 36.76a2 2 0 012-.94c-.73.33-1.38.64-2 .94zM17.57 46.37h-.21a4.37 4.37 0 01.56-2 14.76 14.76 0 00-.35 2zM24.26 35.32c.13-.42.9-.76 2.12-.88l-2.12.88zM18.47 43.67l.39-1c.43.63.39.68-.39 1z"
                            />
                            <path
                                className={styles.cls2}
                                d="M21.34 45.93A2.22 2.22 0 0020 44.87a6.16 6.16 0 01-.87-.5c1.08 0 1.2 0 .63-1-.46-.79-.57-.83-.25-1.48.07-.14 0-.32.12-.48.06.44.58.26.14.67-.05.06.09.33.21.39.77.39.91 1 1.26 1.47s.8 1.36 1.31 2c1.25 1.72 4.58 3.14 6.32 3.31-.73.06-5.29-.27-7.53-3.35z"
                            />
                            <path
                                className={styles.cls2}
                                d="M26.27 47.59a34.86 34.86 0 004.48.44c-2.4.54-2.32.52-4.48-.44zM19.84 47a10.85 10.85 0 01-1.41-2.28 11 11 0 012.51 2.84 7.56 7.56 0 01-1.1-.56zM28.29 43.82a1.42 1.42 0 01-.55-.3 14.47 14.47 0 01-1.31-2.21h.32a11.54 11.54 0 002.12 2.56 2.79 2.79 0 01-.58 0zM25.13 44.75c-.48-.83-1-1.59-1.48-2.43h.1c.8 1 1.95 2.34 2.74 3.36a2.85 2.85 0 01-1.36-.92zM22.23 44.29a8 8 0 003.07 2.87 4.39 4.39 0 01-3.07-2.87zM29.33 44.23c.81.34.7.27 2.32.93a2.89 2.89 0 01-2.32-.93z"
                            />
                            <path
                                className={styles.cls2}
                                d="M33.29 39.76a1.35 1.35 0 01-1.72-.3 2.27 2.27 0 01-.67-1.31 8.52 8.52 0 01-.16-3.37c.06-.34-.16 0-.5 0-.22.8-.19 4.41.61 5.92a12.81 12.81 0 001.75 1.94c-2.63-.73-3.07-2.61-3.51-3 .55 0 .88 0 .44-1.55s.11-2.87-.19-3.09-.77-.22-.91.44a11 11 0 000 3.19 7.72 7.72 0 002.24 4.2c1.11 1 1.45 1 1.44 1.22-3.42-1.22-4.74-3.33-6.41-4.45l.9.33c.7.29 1.09.14 1-.44a31 31 0 01-.35-3.43c0-.6-.66-.28-.73-.08s-.25.53-.81.29c-.4-.18-.77.12-.76.6s.14 1.23.18 1.86c0 .22-.16.43-.21.64s-.08.42 0 .5c.86.55.65 1.55 1 2.19 1.49 3 4 3.53 5 4.3a7.05 7.05 0 01-4.18-1.65c-.8-.71-1.79-2.39-2.71-2.92-.31-.18-.61-.37-.94-.58.11 0 .15-.07.19-.06 1.47.32 1.64.21 1.34-.91-.23-.85-.39-1.72-.54-2.56 0-.13-.1-.39-.21-.36s-.73.48-1.07.7a1.28 1.28 0 01-.54.19c-.47.06-.56.25-.49.52.12.43.27.85.38 1.28a18.35 18.35 0 002.43 4.72 8.36 8.36 0 001 1.17c.65.68 3.62 1.05 4.53 1a7.38 7.38 0 01-3.62 0 2.37 2.37 0 01-1.49-.63 15.19 15.19 0 01-2-2.18 12.6 12.6 0 00-2.1-1.62 3 3 0 00-.46-.28l.06-.14c.29.12.6.22.89.35s.66.19.55-.09c-.43-1.07-.8-2.15-1.21-3.21-.29.39-.36.75-1.17.58a40.51 40.51 0 017.26-4.19l.12-.06a27.94 27.94 0 014.2-1.49c.2.34.67.59.25 1.26a3.73 3.73 0 000 1.79c.27 1.22.66.33.77.22-.11 1.1.27 2.59 1.22 2.55zM22.48 51.11c-.22-.11-1.76-1.77-1.76-1.77l1.1.44s.66.55 1 .77 1 .22 1.1.34a6.65 6.65 0 00.67.44 17.09 17.09 0 01-2.1-.22zM8.06 51.79a2.89 2.89 0 01-.26.38c-.22-.33-.49-.55-.3-.93l.16.13c.06-.44.16-.49.22-1 .28.34.45.23.58.39-.15.38-.27.69-.4 1zM8.9 49.89a2.18 2.18 0 00-.31.56l-.53-.32c.1-.21.21-.45.33-.67s.28-.47.42-.7c0 .45.29.22.48.2a1.22 1.22 0 01-.39.93zM7.52 53.22a1.21 1.21 0 00-.3-.11c-.24 0-.23 0-.13-.29v-.27L7 52h.12c.29.37.62.73.41 1.29zM22.48 54.53l-1.65-.45c-1.21-.33-3.31-5.51-3.31-5.51l.44.11s1.88 3.09 2.32 3.86a1.7 1.7 0 001.54.66s-.11.22.33.55a.78.78 0 01.33.78zM21.05 51.77c-.33-.33-1.21-1.55-1.1-2a14.28 14.28 0 001.32 1.55c.22.11 1 .55 1 .55s-.88.22-1.21-.11zM41.61 39.4a7.23 7.23 0 00-4-5.78c-.18-.36.26-.41.26-.41a2.15 2.15 0 011.07.28c.31.2.93-.11 1.13.1a5.84 5.84 0 011.58 5.81zM19 41.56a10.62 10.62 0 00-2.12 4.26s-.05.09-.08.17l-.44-.11c-.67-.19-1 0-1.33.56a1.06 1.06 0 01-.7.41.9.9 0 00-.84.87 10.16 10.16 0 00-.3 1.28 2 2 0 00.29.76 2.3 2.3 0 00.6-.16 1.41 1.41 0 00.39-.45c.2-.34.25-.82.85-.74a3.39 3.39 0 01.37.68 1 1 0 010 .68c-.39.69-.89 1.29-1.28 2a46.34 46.34 0 01-2 3.28 1.75 1.75 0 01-1.12.72 5.6 5.6 0 00.71-3.58c0-.28.09-.54.08-.82a3.12 3.12 0 00-.08-1.09c-.07-.18-.41-.36-.65-.45s-.45-.21-.4-.48a1.65 1.65 0 00-.32-1.29.5.5 0 010-.46 5.13 5.13 0 01.76-1c0 .14-.08.28-.11.41l.11.06c.2-.38.42-.78.64-1.18a3.8 3.8 0 01.32-.6 17.34 17.34 0 012.85-2.7 1.86 1.86 0 00.77-.88 2.83 2.83 0 012.19-1.89c.13.58.59.42 1 .4a1 1 0 01-.16 1.34zM28.06 50.55L26.78 50a6.45 6.45 0 003.08-.13 2.44 2.44 0 01-1.8.64zM25.89 53.79a8.65 8.65 0 00-1.49.12c-.76.27-.7.71-1.23.67s-.16-.54-.25-.86-.5-.27-.46-.89c0-.43.79-.1 1.37.09a13.29 13.29 0 002.23-.08 8 8 0 01-.17.95zM28.21 8c-2.12.46-4.91 1.26-5.4 1.32.15-.53 1.86-1.42 3-2.09.6-.36 1.76-1.88 3-2.21.55 1.44 3.75 3.2 3.75 3.2A14.16 14.16 0 0028.21 8z"
                            />
                            <path
                                className={styles.cls2}
                                d="M37.33 6.74a.42.42 0 00-.25.31c0 .54-.34.64-.73.69a1.82 1.82 0 00-1.3.71 1.3 1.3 0 01-1.34.55c-.2-.05-.55.22-.72.43s-.34.27-.67.19a8.54 8.54 0 00-1.32.07 13 13 0 00-4.54-.08 25.52 25.52 0 01-3.59.23c.28-.06.78-.22 1.05-.29 1.38-.34 2.76-.71 4.16-1a6.17 6.17 0 011.55-.12c.5 0 1 .14 1.51.21a1.51 1.51 0 01.38.07 1.4 1.4 0 001.68-.42c.53.29 1.11.56 1.63 0a.82.82 0 00.17-.73c-.26-.51-.9-.57-1.56-.24a5.28 5.28 0 001.27-2.15c.07-.31.09-.48-.19-.63a.59.59 0 01-.26-.26 2.17 2.17 0 00-1.72-1.37 1.76 1.76 0 00-2 1.36 3.25 3.25 0 00.29 1.62 5.22 5.22 0 002 1.54c-.44-.11-2.76-1.21-3.42-2.65-.22-.33-.33-.55.44-1.21a6 6 0 013-1.32 7.64 7.64 0 012.42.44 2.33 2.33 0 011.78 1.65c.08.26.3.47.39.72a7.23 7.23 0 01.35 1.18c0 .21 0 .49-.34.5z"
                            />
                        </svg>
                    ) : (
                        <Button href="/">
                            <svg className={styles.header__logo_bird} viewBox="0 0 46.46 79.59">
                                <path
                                    d="M46.09 27.63c-1.76-14-4.61-20.45-6.29-23.16C38 1.6 35.94-.17 32.72 0a6.39 6.39 0 00-6 4.25 5.14 5.14 0 01-2.53 3c-1.79.78-2.65 2.05-2.58 3.41h2.45a9.91 9.91 0 014.32.56 13.37 13.37 0 002.64.9h.07a8.17 8.17 0 003.33-.42c2.56 2.26 2.94 6.5 3.24 9.22.55 5-1.32 9.38-2.32 9.38a36.57 36.57 0 00-23.12 9 26.32 26.32 0 00-8.06 13.37A15.32 15.32 0 010 57a17.86 17.86 0 003.39 0c0 .56-2.77 1.11-2.77 1.11s6.66 3.93 13 1.36c3 3.18 6.6 5.16 7.2 6.27.2.38 1.29 1.77 1.17 2.47-.29 1.5-.55 4.27-.58 4.86s-1.7.83-2.36 1.16c-.41.2.77.33 1.54 1.66s1 3.35 2 3.75c1.37-.4 1.32-1.22 3.42-.67a5.25 5.25 0 004-.77s-.56-.33-.56-.44c0-.35 1.11-.44 1.55-.55s-1.66-.55-1.66-.55a5.78 5.78 0 011.66-.6c1.11-.22 3-.11 4-.77-.34-.34-.73-.2-.56-.45.33-.48 1.55-.55.78-.77-1.52-.43-3.77-.56-5.53-1.1-1.15-.36-1.11-.77-1.11-1.44a24.92 24.92 0 01.66-4c.22-.66 1.55-1.78 2.21-2.53s4.2-5.62 4.76-7.39c6.42-5 9.18-8 10-19.2a55 55 0 00-.18-10.81zM27.15 68.92a19.34 19.34 0 00-.2 3.39c0 .55-1.78.51-2.43.77s1.21.33 2 2a21.9 21.9 0 01-3.1-1.21c-.44-.22.44-5.52 1.19-6.31a14.26 14.26 0 001.69-2.62c.44.66.77.91.95 1.3a6.41 6.41 0 01-.09 2.7z"
                                    fill="#000000"
                                />
                                <path
                                    className={styles.cls2}
                                    d="M34.45 47.79a7.17 7.17 0 00-.51.89 1.7 1.7 0 01.13-.64 1.49 1.49 0 01.25-.38s.25 0 .13.13zM34.71 47.54c-.11 0-.25-.13-.25-.13l.36-.5s.09.56-.11.63zM35 46.94c-.11 0 0-.38 0-.38a5.74 5.74 0 00.38-.64c0 .26-.27 1-.38 1zM39 49.56a16.21 16.21 0 002.17-5.38 3.59 3.59 0 01-2.06-.45 8.51 8.51 0 002.52-.23c.34-.12-.23 3.77-2.63 6.06zM31.11 60c-.47 1-1.29 2.51-1.74 3.56-.12.29.26.8.05 1a.86.86 0 01-1.32-.32c-.1-.24.47-.71.9-1.24a35.17 35.17 0 002.12-5.12c.2-.45.73-.43 1.54-1-.29.66-1.23 2.56-1.51 3.2zM28.79 65.71c-.12.69-.28 1.37-.39 2.06a23.59 23.59 0 00-.08 5.31 1.32 1.32 0 010 .28l-.54.24c-.2-.36-.45-.71-1-.44a.66.66 0 010-.14l.25-.11a.69.69 0 00.53-.73c0-1.44.16-5.08.19-6.52 0-.38.17-.48.65-.47s.43.24.38.52zM41.2 30.85a2.91 2.91 0 01-.49 1.06 2.81 2.81 0 01-.44.48c-.22-.25-.66-.57-.61-.72.22-.59-.19-.72-.51-1a2.89 2.89 0 01-.29-.3l1.23-1.31c.58.62 1.69.49 1.79 1.61-.34-.34-.59-.6-.68.13zM42.07 27.41v1.94c0 .06-.18.17-.19.16l-.32-.31a3.7 3.7 0 01-.93-.32.67.67 0 01-.19-.59c.15-.51.38-1 .59-1.52 1.55.14 1.55.14 1.56.89l-.51-.25zM42.54 24.84c0 .19-.48.71-.65.9-.16-.15-.4 0-.5-.19a15.3 15.3 0 010-2.14 1.58 1.58 0 011.1-.48c0 .82.09 1.05 0 1.91zM37.45 34.37c-.43 1-.45 1-1.21 1.07-.22-.89-.27-1.9-1.35-2.35 0-.66.64-.62 1-.64a3.38 3.38 0 011.18.37l-.72.6 1.08.95zM42.15 19.49a.54.54 0 01-.46.24.64.64 0 01-.3-.45c0-.26.08-.42-.19-.72a6 6 0 01-.82-1.74 4.11 4.11 0 001.49.15c.13.72.27 1.22.37 2a.9.9 0 01-.09.57zM35.85 39.37a12.74 12.74 0 01-1-1.54c-.41-.88-.74-1.8-1.1-2.7v-.33c.64.46 1.14.78 1.3 1.55a27.67 27.67 0 00.95 2.93l-.11.09zM39.72 33a7 7 0 01-1.38-.27 2.11 2.11 0 01-1-.77c-.1-.16.19-.57.3-.86l1.58.2c-.49.94.54 1 .47 1.7zM40.69 13.55c-.66-.22-1.22-.58-1.3.17 0 .44-.69-1.49-.87-2a4.81 4.81 0 01-.12-.72c.63.15 1.18.11 1.37.76h-.32c.42.57.79 1.15 1.24 1.77zM25.13 58.49a24.83 24.83 0 01-4 .58A45.79 45.79 0 0025.77 56a10.57 10.57 0 01-.64 2.53zM41.62 22.76a2 2 0 01-.24-1.6 3.21 3.21 0 00-.05-1h1c0 .37.09 1.33.12 1.75s-.57.69-.82.88z"
                                />
                                <path
                                    className={styles.cls2}
                                    d="M41 16.43h-.29l-.71-.15c.13-.2.29-.38.4-.59a1 1 0 00.15-.48c0-.09-.24-.26-.28-.23a2.2 2.2 0 00-.38.37s-.14 0-.14-.07c.07-.52.15-1 .23-1.57.18.08.46.13.51.26a9.49 9.49 0 01.4 1.28c.1.4.23.76.77.44.1.56-.2.71-.63.74zM38.59 10.52C37.84 10.21 37 10 36.88 9a3.2 3.2 0 00.54-.09c.38-.15.36-.16.43.3 0 .14.2.26.3.39l.6.83-.16.14zM35 35c-.82-.63-1.71-2-2.16-1.93a2 2 0 01.29-.36c.31-.27.91-.18 1.08-.27-.33.44-.22.69-.11.88s.39.2.44.33c.2.48.33.44.62.33 0 .08 0 .15.07.22-.07.24-.14.47-.23.8zM35.83 40.79a8.51 8.51 0 00-.67 1.21 3.35 3.35 0 00-1.33-1 1.63 1.63 0 00-.44 1c-.29-.45-.86-1.23-.55-1.43s.88-.11 1.54-.22a17.69 17.69 0 00-1.57-3.76c-.22-.36-.37-.47-.59-.82-.09-.13-.22-.34-.18-.42.36-.63-.18-1.51-.41-2.06 1 .12 1.76.88 1.53 1.77a3.4 3.4 0 00.69 2.63 8 8 0 001.94 2.29c.3.23.32.52 0 .86zM35.18 9.09a1.46 1.46 0 011.41-.91 2.71 2.71 0 00.95-.38c-.09.44-1.54 1.2-2.36 1.29zM33.67 5.93c-.35-.63-.61-1.11-1-1.74l1.39.68a1.43 1.43 0 01-.44 1.06zM28.94 73.66l1.93.89a2 2 0 01-1.93-.89zM30.12 75.71l-1.27-.81.09-.13c.42.27.84.54 1.27.8l-.09.14zM32.7 75.05l-1.49-.35v-.13l1.49.35v.13z"
                                />
                                <path
                                    className={styles.cls2}
                                    d="M43.05 43.05a13.31 13.31 0 01-.61 2.68 16.58 16.58 0 01-3.1 5.4 26.07 26.07 0 01-12 7.14c.17-.56 1-3.53 1-3.53A12.41 12.41 0 0033.72 49c.07-.17.09-.56 0-.46-1.85 3-4.25 4.66-5.21 4.87-.11.22.13-.9.22-1 .55-.24 1.32-.57 1.43-1.34.77 0 1-.55.79-1.19.87-.25 1-.9.54-1.4.77-.17 1-1.16.44-1.5a.9.9 0 00.44-1.49.8.8 0 00.33-1.37c.55-.22 1-.66.55-1.33.25-.1.88-.33.77-1 .77.66.85 1.11.29 2a3 3 0 00-.41 1.84 12.25 12.25 0 011.22-2.36 15.5 15.5 0 00.93-1.67c.45-.69.65-.67 1.35-.24a4.4 4.4 0 003.67.54l.38-.1c1.21-.32 1.69 0 1.57 1.24z"
                                />
                                <path
                                    className={styles.cls2}
                                    d="M34.07 48a1.7 1.7 0 00-.13.64 7.17 7.17 0 01.51-.89c.12-.13-.13-.13-.13-.13a1.49 1.49 0 00-.25.38zM34.82 46.91l-.36.5s.14.17.25.13.11-.63.11-.63zM35 46.56s-.11.35 0 .38.38-.76.38-1a5.74 5.74 0 01-.38.64zM41.64 43.5a8.51 8.51 0 01-2.52.23 3.59 3.59 0 002.06.45A16.21 16.21 0 0139 49.56c2.4-2.29 3-6.18 2.63-6.06zM41.84 26.31l.71-.9c.72 2.25-.71.9-.71.9zM28.32 74.6s-.66-.44-.77-.55.33 0 .33 0l.66.44-.22.11zM30.87 73.88l1.13.22s-1.23.1-1.08-.22zM22.59 73.54a8.54 8.54 0 00-.17 1 3.53 3.53 0 00.07.83 1.28 1.28 0 01-.29.07c-.2-.4-.49-.87-.42-1.22a46.61 46.61 0 00.68-6.87l.05-.08c.05-.08.92.16.9.31s-.54 4.38-.82 6zM25.47 77.11a11.37 11.37 0 01-2.23-1.17v-.15c.75.34 1.68.75 2.42 1.1-.12 0-.08.29-.22.22zM26.07 57.84c.23-1.08.63-4.28.71-5.28.41 1-.37 4.22-.71 5.28zM26.05 77.23c.06-.07.07-.18.17-.18a2 2 0 011.44.58l-1.61-.4zM23 76.91l-.55-.77.25-.14a7.5 7.5 0 01.55.77l-.22.11zM27.34 76.24l-1.18-.34.06-.11 1.16.3v.15zM24.18 78.23c-.25-.26-.5-.51-.74-.77l.18-.17c.18.18.62.62.75.79l-.19.15zM25.46 75.7l-1.07-.38.19-.06 1 .33c0 .07-.11.11-.11.11z"
                                />
                                <path
                                    className={styles.cls2}
                                    d="M28.25 53.57a69.62 69.62 0 01-4.12 11.1c-.08.13-.29.28-.33.44-.15.74.11 1.55-.22 1.77s-.85-.32-.88-.44c-.11-.56.44-1.33.82-2.12.23-.47 2.11-5.2 2.35-6.27a1.89 1.89 0 01.14.67 18.26 18.26 0 001.28-6.1c0-.24-.12-.47-.11-.7 0-.7.92-.81 1.05-.83.08.23.25.47.23.69a10.67 10.67 0 01-.21 1.79zM18.22 39.26a3.05 3.05 0 01-.69.4c-.49.28-1 .58-1.45.89a3.89 3.89 0 01-.4.18c.07.23.19.53-.39.5.37.48.08.76-.31 1A14.65 14.65 0 0011.26 46c-.44.59-.85 1.16-1.27 1.68a10.07 10.07 0 01-.65 1.14c-.41-.76-.11-.55.35-1.43s1.21-1.78 1.8-2.73c.29-.43 1.42-1.62 1.66-2a.52.52 0 01.16-.22c.87-.44 1.1-1.35 1.93-1.78.4-.21.77-.46 1.14-.69.12-.06.28-.16.27-.25-.06-.42.25-.51.69-.56.15 0 .37-.17.36-.28 0-.44.36-.56.77-.75a1 1 0 00.44-.33 2.2 2.2 0 011.67-.84 20.69 20.69 0 00-2.36 2.32zM27.22 50.89c-.66.11-.43.56-.66.66-.37-.25-1.75-.35-1.94-.7a3.78 3.78 0 00-2.3-1.49 28 28 0 00-3.8-1.21c-.47-.13-1-.15-1.42-.29a12.7 12.7 0 01-1.3-.57l-.16.07c-.25-.63 0-1 .7-.8a39.86 39.86 0 017.49 2.85 16.51 16.51 0 001.72.67c.42.17 2 .75 1.67.81zM18.8 39.86A2.75 2.75 0 0120.3 38c2.3-1.33 4.76-2.41 7.18-3.51.6-.27 1.2-.55 1.81-.76a11.43 11.43 0 011.43-.35 1.85 1.85 0 000 .23c-4.22 1.26-8.68 3.23-12 6.26zM13 55a4.38 4.38 0 01.24-.43c.44-.69.77-1.41 1.21-2a5.51 5.51 0 011.09-.93l.12.12A5.14 5.14 0 0113 55zM16.31 51.79c-.21.39-.47.76-.72 1.14h-.05a15.26 15.26 0 00.73-2 5.31 5.31 0 000-1.13c0-.41-.3-.88.12-1.19.09-.07 0-.31 0-.48.27 0 .47 0 .44.41a7.82 7.82 0 01-.56 3.29zM21.31 36.76a2 2 0 012-.94c-.73.33-1.38.64-2 .94zM17.57 46.37h-.21a4.37 4.37 0 01.56-2 14.76 14.76 0 00-.35 2zM24.26 35.32c.13-.42.9-.76 2.12-.88l-2.12.88zM18.47 43.67l.39-1c.43.63.39.68-.39 1z"
                                />
                                <path
                                    className={styles.cls2}
                                    d="M21.34 45.93A2.22 2.22 0 0020 44.87a6.16 6.16 0 01-.87-.5c1.08 0 1.2 0 .63-1-.46-.79-.57-.83-.25-1.48.07-.14 0-.32.12-.48.06.44.58.26.14.67-.05.06.09.33.21.39.77.39.91 1 1.26 1.47s.8 1.36 1.31 2c1.25 1.72 4.58 3.14 6.32 3.31-.73.06-5.29-.27-7.53-3.35z"
                                />
                                <path
                                    className={styles.cls2}
                                    d="M26.27 47.59a34.86 34.86 0 004.48.44c-2.4.54-2.32.52-4.48-.44zM19.84 47a10.85 10.85 0 01-1.41-2.28 11 11 0 012.51 2.84 7.56 7.56 0 01-1.1-.56zM28.29 43.82a1.42 1.42 0 01-.55-.3 14.47 14.47 0 01-1.31-2.21h.32a11.54 11.54 0 002.12 2.56 2.79 2.79 0 01-.58 0zM25.13 44.75c-.48-.83-1-1.59-1.48-2.43h.1c.8 1 1.95 2.34 2.74 3.36a2.85 2.85 0 01-1.36-.92zM22.23 44.29a8 8 0 003.07 2.87 4.39 4.39 0 01-3.07-2.87zM29.33 44.23c.81.34.7.27 2.32.93a2.89 2.89 0 01-2.32-.93z"
                                />
                                <path
                                    className={styles.cls2}
                                    d="M33.29 39.76a1.35 1.35 0 01-1.72-.3 2.27 2.27 0 01-.67-1.31 8.52 8.52 0 01-.16-3.37c.06-.34-.16 0-.5 0-.22.8-.19 4.41.61 5.92a12.81 12.81 0 001.75 1.94c-2.63-.73-3.07-2.61-3.51-3 .55 0 .88 0 .44-1.55s.11-2.87-.19-3.09-.77-.22-.91.44a11 11 0 000 3.19 7.72 7.72 0 002.24 4.2c1.11 1 1.45 1 1.44 1.22-3.42-1.22-4.74-3.33-6.41-4.45l.9.33c.7.29 1.09.14 1-.44a31 31 0 01-.35-3.43c0-.6-.66-.28-.73-.08s-.25.53-.81.29c-.4-.18-.77.12-.76.6s.14 1.23.18 1.86c0 .22-.16.43-.21.64s-.08.42 0 .5c.86.55.65 1.55 1 2.19 1.49 3 4 3.53 5 4.3a7.05 7.05 0 01-4.18-1.65c-.8-.71-1.79-2.39-2.71-2.92-.31-.18-.61-.37-.94-.58.11 0 .15-.07.19-.06 1.47.32 1.64.21 1.34-.91-.23-.85-.39-1.72-.54-2.56 0-.13-.1-.39-.21-.36s-.73.48-1.07.7a1.28 1.28 0 01-.54.19c-.47.06-.56.25-.49.52.12.43.27.85.38 1.28a18.35 18.35 0 002.43 4.72 8.36 8.36 0 001 1.17c.65.68 3.62 1.05 4.53 1a7.38 7.38 0 01-3.62 0 2.37 2.37 0 01-1.49-.63 15.19 15.19 0 01-2-2.18 12.6 12.6 0 00-2.1-1.62 3 3 0 00-.46-.28l.06-.14c.29.12.6.22.89.35s.66.19.55-.09c-.43-1.07-.8-2.15-1.21-3.21-.29.39-.36.75-1.17.58a40.51 40.51 0 017.26-4.19l.12-.06a27.94 27.94 0 014.2-1.49c.2.34.67.59.25 1.26a3.73 3.73 0 000 1.79c.27 1.22.66.33.77.22-.11 1.1.27 2.59 1.22 2.55zM22.48 51.11c-.22-.11-1.76-1.77-1.76-1.77l1.1.44s.66.55 1 .77 1 .22 1.1.34a6.65 6.65 0 00.67.44 17.09 17.09 0 01-2.1-.22zM8.06 51.79a2.89 2.89 0 01-.26.38c-.22-.33-.49-.55-.3-.93l.16.13c.06-.44.16-.49.22-1 .28.34.45.23.58.39-.15.38-.27.69-.4 1zM8.9 49.89a2.18 2.18 0 00-.31.56l-.53-.32c.1-.21.21-.45.33-.67s.28-.47.42-.7c0 .45.29.22.48.2a1.22 1.22 0 01-.39.93zM7.52 53.22a1.21 1.21 0 00-.3-.11c-.24 0-.23 0-.13-.29v-.27L7 52h.12c.29.37.62.73.41 1.29zM22.48 54.53l-1.65-.45c-1.21-.33-3.31-5.51-3.31-5.51l.44.11s1.88 3.09 2.32 3.86a1.7 1.7 0 001.54.66s-.11.22.33.55a.78.78 0 01.33.78zM21.05 51.77c-.33-.33-1.21-1.55-1.1-2a14.28 14.28 0 001.32 1.55c.22.11 1 .55 1 .55s-.88.22-1.21-.11zM41.61 39.4a7.23 7.23 0 00-4-5.78c-.18-.36.26-.41.26-.41a2.15 2.15 0 011.07.28c.31.2.93-.11 1.13.1a5.84 5.84 0 011.58 5.81zM19 41.56a10.62 10.62 0 00-2.12 4.26s-.05.09-.08.17l-.44-.11c-.67-.19-1 0-1.33.56a1.06 1.06 0 01-.7.41.9.9 0 00-.84.87 10.16 10.16 0 00-.3 1.28 2 2 0 00.29.76 2.3 2.3 0 00.6-.16 1.41 1.41 0 00.39-.45c.2-.34.25-.82.85-.74a3.39 3.39 0 01.37.68 1 1 0 010 .68c-.39.69-.89 1.29-1.28 2a46.34 46.34 0 01-2 3.28 1.75 1.75 0 01-1.12.72 5.6 5.6 0 00.71-3.58c0-.28.09-.54.08-.82a3.12 3.12 0 00-.08-1.09c-.07-.18-.41-.36-.65-.45s-.45-.21-.4-.48a1.65 1.65 0 00-.32-1.29.5.5 0 010-.46 5.13 5.13 0 01.76-1c0 .14-.08.28-.11.41l.11.06c.2-.38.42-.78.64-1.18a3.8 3.8 0 01.32-.6 17.34 17.34 0 012.85-2.7 1.86 1.86 0 00.77-.88 2.83 2.83 0 012.19-1.89c.13.58.59.42 1 .4a1 1 0 01-.16 1.34zM28.06 50.55L26.78 50a6.45 6.45 0 003.08-.13 2.44 2.44 0 01-1.8.64zM25.89 53.79a8.65 8.65 0 00-1.49.12c-.76.27-.7.71-1.23.67s-.16-.54-.25-.86-.5-.27-.46-.89c0-.43.79-.1 1.37.09a13.29 13.29 0 002.23-.08 8 8 0 01-.17.95zM28.21 8c-2.12.46-4.91 1.26-5.4 1.32.15-.53 1.86-1.42 3-2.09.6-.36 1.76-1.88 3-2.21.55 1.44 3.75 3.2 3.75 3.2A14.16 14.16 0 0028.21 8z"
                                />
                                <path
                                    className={styles.cls2}
                                    d="M37.33 6.74a.42.42 0 00-.25.31c0 .54-.34.64-.73.69a1.82 1.82 0 00-1.3.71 1.3 1.3 0 01-1.34.55c-.2-.05-.55.22-.72.43s-.34.27-.67.19a8.54 8.54 0 00-1.32.07 13 13 0 00-4.54-.08 25.52 25.52 0 01-3.59.23c.28-.06.78-.22 1.05-.29 1.38-.34 2.76-.71 4.16-1a6.17 6.17 0 011.55-.12c.5 0 1 .14 1.51.21a1.51 1.51 0 01.38.07 1.4 1.4 0 001.68-.42c.53.29 1.11.56 1.63 0a.82.82 0 00.17-.73c-.26-.51-.9-.57-1.56-.24a5.28 5.28 0 001.27-2.15c.07-.31.09-.48-.19-.63a.59.59 0 01-.26-.26 2.17 2.17 0 00-1.72-1.37 1.76 1.76 0 00-2 1.36 3.25 3.25 0 00.29 1.62 5.22 5.22 0 002 1.54c-.44-.11-2.76-1.21-3.42-2.65-.22-.33-.33-.55.44-1.21a6 6 0 013-1.32 7.64 7.64 0 012.42.44 2.33 2.33 0 011.78 1.65c.08.26.3.47.39.72a7.23 7.23 0 01.35 1.18c0 .21 0 .49-.34.5z"
                                />
                            </svg>
                        </Button>
                    )}

                    {pathname === '/' ? <span className={styles.header__desktop_copy_place}>{t('header:desktop__copy_place')}</span> : <Navigation t={t} pathname={this.props.router.pathname} />}
                </div>
            </nav>
        );
    }

    // the handleClick function is passed to the HamburgerMenu and is called when the user clicks on the menu button
    _handleClick = () => {
        const { buttonHamburgerClicked, overlayNavigationVisible } = this.props;

        if (isFunction(buttonHamburgerClicked)) {
            buttonHamburgerClicked(!overlayNavigationVisible);
        }
    };

    _setupEventListeners() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);
    }

    _removeEventListeners() {
        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);
    }

    _resize() {
        if (isMediaQueryNarrow() || isMediaQueryRegular()) {
            this.setState({ isNarrow: true });
        } else {
            this.setState({ isNarrow: false });
        }
    }

    _resizeHandler = () => {
        this._resize();
    };

    _handleHamburgerClick = (overlayNavigationVisible) => {
        const { buttonHamburgerClicked } = this.props;

        if (isFunction(buttonHamburgerClicked)) {
            buttonHamburgerClicked(!overlayNavigationVisible);
        }
    };
}
