import React, { Component } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
import Head from 'next/head';

class Process extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className="page page-process">
                <Head>
                    <title>{t('process:meta__title')}</title>
                </Head>

                <h1>{t('process:heading')}</h1>
            </div>
        );
    }
}

export default withTranslation(Process);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'footer', 'cookie-notification'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['process', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
