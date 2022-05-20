import React, { Component } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
import Head from 'next/head';

import SpritesheetPreloaded from 'components/SpritesheetPreloaded';
import HouseCanvas from 'components/HouseCanvas';
import CanvasCustomCursor from 'components/CanvasCustomCursor';

class Contact extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className="page page-contact">
                <Head>
                    <title>{t('contact:meta__title')}</title>
                </Head>

                <SpritesheetPreloaded />
                <HouseCanvas />
                <CanvasCustomCursor />

                <h1>{t('contact:heading')}</h1>
            </div>
        );
    }
}

export default withTranslation(Contact);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'navigation-bar', 'footer', 'cookie-notification'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['contact', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
