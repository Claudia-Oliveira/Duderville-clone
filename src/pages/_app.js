import 'styles/main.scss';

import { withTranslationApp } from 'utils/translations/i18n';
import WatchForHover from 'utils/WatchForHover';
// import Analytics from 'components/analytics/Analytics';
import { resizeManager } from '@superherocheesecake/next-resize-manager';
import { isMediaQueryWide } from 'utils/DeviceUtil';

import Transition from '@superherocheesecake/next-transition';

import React from 'react';
import Head from 'next/head';
import Preloader from 'components/Preloader';

import { Router } from 'next/router';

// import SafariCacheFix from 'components/performance/SafariCacheFix';
// import { report } from 'components/performance/WebVitals';

// import CookieNotification from 'components/CookieNotification';
// import GoogleGlobalSiteTag from 'components/analytics/GoogleGlobalSiteTag';

import Header from 'components/Header';
import Footer from 'components/Footer';
//import MenuOverlay from 'components/MenuOverlay';

import CanvasCustomCursor from 'components/CanvasCustomCursor';

// export function reportWebVitals(props) {
//     report(props);
// }
class Application extends React.Component {
    state = {
        overlayMenuVisible: false,
        isNarrow: null,
        isMediaQueryWide: isMediaQueryWide() || null,
        isPreloaderCompleted: false
    };

    componentDidMount() {
        this._setupEventListers();
        this._resize();
        this._setMediaQueryWide();

        new WatchForHover();
    }

    componentWillUnmount() {
        this._removeEventListers();
    }

    render() {
        const { Component, t, pageProps, router } = this.props;
        const { overlayMenuVisible, isPreloaderCompleted } = this.state;

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="icon" type="image/png" href="/assets/img/favicon.png"></link>
                </Head>

                {/* <SafariCacheFix /> */}

                {isPreloaderCompleted && (
                    <>
                        <Header overlayMenuVisible={overlayMenuVisible} onButtonMenuClicked={this._handleButtonMenuClick} t={t} router={router.pathname}></Header>

                        <Transition fragment={router.pathname}>
                            <Component {...pageProps} />
                        </Transition>
                        <CanvasCustomCursor />
                        <Footer t={t} router={router.pathname}></Footer>
                    </>
                )}

                {!isPreloaderCompleted && <Preloader onPreloaderCompleted={this._handlePreloaderCompleted} />}

                {/* {overlayMenuVisible && <MenuOverlay t={t} router={router.pathname} />} */}
                {/* 
                <Analytics>
                    <GoogleGlobalSiteTag />
                </Analytics> */}
            </>
        );
    }

    _setMediaQueryWide() {
        const boolean = isMediaQueryWide();

        if (this.state.isMediaQueryWide !== boolean) {
            this.setState({ isMediaQueryWide: boolean });
        }
    }

    _setupEventListers() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);

        Router.events.on('routeChangeStart', this._handleRouteChange);
    }

    _removeEventListers() {
        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);

        Router.events.off('routeChangeStart', this._handleRouteChange);
    }

    _resize() {
        this._setMediaQueryWide();
        this.setState({ overlayMenuVisible: false });
    }

    _resizeHandler = () => {
        this._resize();
    };

    _handleRouteChange = () => {
        setTimeout(() => {
            this.setState({ overlayMenuVisible: false });
        }, '800');
    };

    _handleButtonMenuClick = (overlayMenuVisible) => {
        this.setState({ overlayMenuVisible: overlayMenuVisible }, () => {
            //console.log(overlayMenuVisible);
        });
    };

    _handlePreloaderCompleted = () => {
        this.setState({ isPreloaderCompleted: true });
    };
}

export default withTranslationApp(Application);

//show the preloader until is completed, when it's done, show the transition with the index
// when is completed call the props(preloaderComplete)
// add a handler
// preloader.active = true or false
// preloader.complete = true or false
