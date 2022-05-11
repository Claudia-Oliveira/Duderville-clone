import 'styles/main.scss';

import { withTranslationApp } from 'utils/translations/i18n';
import Analytics from 'components/analytics/Analytics';

import Transition from '@superherocheesecake/next-transition';

import React from 'react';
import Head from 'next/head';

import SafariCacheFix from 'components/performance/SafariCacheFix';
import { report } from 'components/performance/WebVitals';

import GoogleGlobalSiteTag from 'components/analytics/GoogleGlobalSiteTag';

import WatchForHover from 'utils/WatchForHover';

import Header from 'components/Header';
import Footer from 'components/Footer';
//import OverlayMenu from 'components/OverlayMenu';

export function reportWebVitals(props) {
    report(props);
}

class Application extends React.Component {
    state = {
        overlayNavigationVisible: false,
        isNarrow: null
    };

    componentDidMount() {
        new WatchForHover();
    }

    render() {
        const { Component, t, pageProps, router, children } = this.props;

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="icon" type="image/png" href="/assets/img/favicon.png"></link>
                </Head>

                <SafariCacheFix />

                <Header t={t} router={router}>
                    {children}
                </Header>

                <Transition fragment={router.pathname}>
                    <Component t={t} {...pageProps} router={router} />
                </Transition>

                <Footer t={t}></Footer>
                {/* <OverlayMenu t={t} {...pageProps} router={router} /> */}
                <Analytics>
                    <GoogleGlobalSiteTag />
                </Analytics>
            </>
        );
    }

    _handleButtonHamburgerClick = (overlayNavigationVisible = true) => {
        this.setState({ overlayNavigationVisible: !overlayNavigationVisible }, () => {
            if (this.state.overlayNavigationVisible) {
                document.body.style.overflowY = 'hidden';
            } else {
                document.body.style.overflowY = 'scroll';
            }
        });
    };
}

export default withTranslationApp(Application);
