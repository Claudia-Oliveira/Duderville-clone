import styles from './HeroStudio.module.scss';

import React, { Component } from 'react';

export default class HeroStudio extends Component {
    render() {
        const { t } = this.props;

        return (
            <section className={styles.heroStudio__container}>
                <h1 className={styles.heroStudio__title}>
                    <span className={styles.heroStudio__title_span}>{t('studio:heading_top')}</span>
                    <span className={styles.heroStudio__title_span}>{t('studio:heading_bottom')}</span>
                </h1>

                <h2 className={styles.heroStudio__subtitle}>{t('studio:hero_address')}</h2>
                <svg className={styles.heroStudio__scroll_arrow} viewBox="0 0 14 38">
                    <path d="M7.077,37.585 L8.037,36.659 L13.478,29.812 L11.556,27.952 L8.437,30.960 L8.437,0.785 L5.717,0.785 L5.717,30.960 L2.598,27.952 L0.677,29.812 L6.117,36.659 L7.077,37.585 Z"></path>
                </svg>

                <div className={styles.heroStudio__image}></div>

                <h2 className={styles.heroStudio__subtitle}>{t('studio:section_title_first')}</h2>

                <h2 className={styles.heroStudio__title_slogan}>
                    <span className={styles.heroStudio__title_word}>{t('studio:section_slogan_first')}</span>
                    <em className={styles.heroStudio__title_emphasis}>{t('studio:section_slogan_emphasis_a')}</em>
                    <span className={styles.heroStudio__title_word}>{t('studio:section_slogan_second')}</span>
                    <em className={styles.heroStudio__title_emphasis}>{t('studio:section_slogan_emphasis_of')}</em>
                    <span className={styles.heroStudio__title_word}>{t('studio:section_slogan_third')}</span>
                    <em className={styles.heroStudio__title_emphasis}>{t('studio:section_slogan_emphasis_and')}</em>
                    <span className={styles.heroStudio__title_word}>{t('studio:section_slogan_fourth')}</span>
                </h2>

                <p className={styles.heroStudio__paragraph}>{t('studio:section_about_paragraph')}</p>

                <img className={styles.heroStudio__feathers} src="assets/img/feathers.png" alt="feathers" />
            </section>
        );
    }
}
