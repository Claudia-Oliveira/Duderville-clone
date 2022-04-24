import Head from 'next/head';
import React, { Component } from 'react';
import styles from './index.module.scss';

import { withTranslation, getTranslation } from 'utils/translations/i18n';

class Home extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className={`${styles.page} ${styles.page__home}`}>
                <Head>
                    <title>{t('home:meta__title')}</title>
                </Head>

                {/* <h1>{t('home:heading')}</h1> */}

                <h1 className={styles.home__hero_container}>
                    <svg className={styles.home__hero_container_title} viewBox="0 0 1441 184">
                        <path
                            fillRule="evenodd"
                            fill="rgb(48, 48, 48)"
                            d="M1441.8,155.500 L1441.8,182.790 L1329.844,182.790 L1329.844,1.457 L1441.8,1.457 L1441.8,26.960 L1354.433,26.960 L1354.433,58.586 L1418.980,58.586 L1418.980,83.579 L1354.433,83.579 L1354.433,155.500 L1441.8,155.500 ZM1203.785,181.801 L1203.785,156.298 L1203.785,1.457 L1229.399,1.457 L1229.399,156.298 L1312.452,156.298 L1312.452,181.801 L1229.399,181.801 L1203.785,181.801 ZM1078.524,181.801 L1078.524,156.298 L1078.524,1.457 L1104.138,1.457 L1104.138,156.298 L1187.191,156.298 L1187.191,181.801 L1104.138,181.801 L1078.524,181.801 ZM1032.827,1.457 L1058.441,1.457 L1058.441,181.801 L1032.827,181.801 L1032.827,1.457 ZM924.100,183.248 C924.100,183.248 841.944,2.516 841.944,0.998 L872.690,0.998 L930.400,133.130 L986.95,0.998 L1018.855,0.998 L936.700,183.248 L924.100,183.248 ZM802.963,82.5 L875.28,181.993 L844.792,181.993 C844.792,181.993 779.504,86.341 775.321,82.327 L764.846,82.327 L764.846,181.993 L739.992,181.993 L739.992,82.327 L739.992,82.135 L739.992,0.998 L796.876,0.998 C796.876,0.998 834.798,0.355 834.798,41.856 C834.798,74.184 812.723,80.703 802.963,82.5 ZM796.107,24.356 L764.846,24.356 L764.846,58.971 L797.132,58.971 C797.132,58.971 809.944,58.327 809.944,41.663 C809.944,24.999 796.107,24.356 796.107,24.356 ZM610.667,1.457 L721.831,1.457 L721.831,26.960 L635.257,26.960 L635.257,58.586 L699.804,58.586 L699.804,83.579 L635.257,83.579 L635.257,155.500 L721.831,155.500 L721.831,182.790 L610.667,182.790 L610.667,1.457 ZM479.175,158.161 L593.572,158.161 L593.572,181.531 L479.175,181.531 L479.175,158.161 ZM502.226,144.808 L479.175,144.808 L479.175,1.931 L504.151,1.343 C504.151,1.343 593.572,-8.220 593.572,73.266 C593.572,151.793 502.226,144.808 502.226,144.808 ZM568.650,72.875 C568.650,57.593 563.921,45.701 554.597,37.530 C538.150,23.124 511.668,23.797 503.57,24.451 L503.57,121.75 C511.652,121.760 538.159,122.526 554.610,108.160 C563.927,100.21 568.650,88.152 568.650,72.875 ZM337.858,53.472 L337.858,183.984 L311.62,183.984 L311.62,0.998 L327.522,0.998 L434.324,128.449 L434.324,0.998 L461.503,0.998 L461.503,183.984 L445.808,183.984 L337.858,53.472 ZM237.769,183.248 L228.836,183.248 L219.904,183.248 C183.666,183.248 166.312,154.93 166.312,125.317 C166.312,117.628 166.312,0.998 166.312,0.998 L192.343,0.998 C192.343,0.998 192.343,96.138 192.343,122.797 C192.343,157.657 228.836,156.927 228.836,156.927 C228.836,156.927 265.330,158.470 265.330,123.609 C265.330,96.951 265.330,0.998 265.330,0.998 L291.361,0.998 C291.361,0.998 291.361,117.628 291.361,125.317 C291.361,154.499 274.7,183.248 237.769,183.248 ZM29.296,183.782 L0.1,183.782 L0.1,2.183 L31.742,1.437 C31.742,1.437 145.397,-10.719 145.397,92.852 C145.397,192.660 29.296,183.782 29.296,183.782 ZM26.234,27.57 L26.234,157.355 C26.234,157.355 118.258,170.309 118.258,92.354 C118.258,14.401 26.234,27.57 26.234,27.57 Z"
                        />
                    </svg>
                </h1>

                <img src="assets/img/video-pic.png" alt="video" className={styles.home__hero_video} />

                <h2 className={styles.home__pages_title}>I. The Studio</h2>

                <div className={styles.home__slogan}>
                    <div className={styles.home__slogan_text}>
                        <div className={styles.home__slogan_word_wrapper}>
                            <span className={styles.home__slogan_decoration}>A</span>
                        </div>

                        <span className={styles.home__slogan_words}>creative motion</span>
                    </div>

                    <div className={styles.home__slogan_text}>
                        <span className={styles.home__slogan_words}>studio</span>
                        <div className={styles.home__slogan_word_wrapper}>
                            <span className={styles.home__slogan_decoration}>in</span>
                        </div>
                        <span className={styles.home__slogan_words}>Malmö,</span>
                    </div>
                    <span>Sweden.</span>
                </div>
            </div>
        );
    }
}

export default withTranslation(Home);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'footer', 'cookie-notification'];
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