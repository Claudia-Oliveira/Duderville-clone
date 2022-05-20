import Head from 'next/head';
import React, { Component } from 'react';
import styles from './index.module.scss';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
import SectionStudio from 'components/SectionStudio';
import SectionCases from 'components/SectionCases';
import Navigation from 'components/Navigation';
import SectionProcessContact from 'components/SectionProcessContact';
import DundervilleTitle from 'components/DundervilleTitle';

class Home extends Component {
    render() {
        const { t } = this.props;
        let pathname = this.props.pathname;

        return (
            <div className={styles.page}>
                <Head>
                    <title>{t('home:meta__title')}</title>
                </Head>

                <div className={styles.page__home}>
                    <DundervilleTitle />

                    <Navigation pathname={pathname} t={t} className={styles.home__navigation_bar} />
                </div>

                <div className={styles.home__hero_image}>
                    <img src="assets/img/volume-closed-icon.png" alt="volume closed" className={styles.home__volume_icon} />
                </div>

                <SectionStudio t={t} />

                {/* <div className={styles.video}>
                    <div className={styles.actualVideo}></div>
                </div> */}

                <SectionCases t={t} />
                <SectionProcessContact t={t} />
            </div>
        );
    }
}

export default withTranslation(Home);
// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'navigation-bar', 'section-process-contact', 'footer', 'cookie-notification'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['home', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
