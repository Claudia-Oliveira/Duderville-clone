import React, { Component } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
import Head from 'next/head';

export async function getStaticPaths() {
    return {
        paths: [
            // String variant:
            '/the-work/case',
            // Object variant:
            { params: { case: 'case' } }
        ],
        fallback: true
    };
}

class Case extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className="page page-case">
                <Head>
                    <title>{t('case:meta__title')}</title>
                </Head>

                <h1>{t('case:heading')}</h1>
            </div>
        );
    }
}

export default withTranslation(Case);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'navigation-bar', 'footer', 'cookie-notification'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['case', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
