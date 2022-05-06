import React, { Component } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
import Head from 'next/head';
import SectionProcessContact from 'components/SectionProcessContact';

class Studio extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className="page page-studio">
                <Head>
                    <title>{t('studio:meta__title')}</title>
                </Head>

                <h1>{t('studio:heading')}</h1>
                <SectionProcessContact t={t} />
            </div>
        );
    }
}

export default withTranslation(Studio);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'navigation-bar', 'section-process-contact', 'footer', 'cookie-notification'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['studio', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
