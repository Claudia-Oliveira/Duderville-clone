import 'styles/main.scss';

import { withTranslationApp } from 'utils/translations/i18n';
import Analytics from 'components/analytics/Analytics';

import Transition from '@superherocheesecake/next-transition';

import React from 'react';
import Head from 'next/head';

import SafariCacheFix from 'components/performance/SafariCacheFix';
import { report } from 'components/performance/WebVitals';

import GoogleGlobalSiteTag from 'components/analytics/GoogleGlobalSiteTag';

import Header from 'components/Header';
import Footer from 'components/Footer';

export function reportWebVitals(props) {
    report(props);
}

class Application extends React.Component {
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

                <Analytics>
                    <GoogleGlobalSiteTag />
                </Analytics>
            </>
        );
    }
}

export default withTranslationApp(Application);
