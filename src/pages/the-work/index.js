import React, { Component } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
import Head from 'next/head';
import Button from 'components/Button';

class TheWork extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className="page page-the-work">
                <Head>
                    <title>{t('the-work:meta__title')}</title>
                </Head>

                <h1>{t('the-work:heading')}</h1>
                <Button href="/the-work/case">{t('the-work:internal-link')}</Button>
            </div>
        );
    }
}

export default withTranslation(TheWork);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'header-links', 'footer', 'cookie-notification'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['the-work', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
