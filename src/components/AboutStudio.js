import styles from './AboutStudio.module.scss';

import React, { Component } from 'react';

export default class AboutStudio extends Component {
    render() {
        const { t } = this.props;

        return (
            <section className={styles.aboutStudio__container}>
                <h2 className={styles.aboutStudio__subtitle}>{t('studio:section_title_first')}</h2>

                <h2 className={styles.aboutStudio__title_slogan}>
                    <span className={styles.aboutStudio__title_word}>{t('studio:section_slogan_first')}</span>
                    <em className={styles.aboutStudio__title_emphasis}>{t('studio:section_slogan_emphasis_a')}</em>
                    <span className={styles.aboutStudio__title_word}>{t('studio:section_slogan_second')}</span>
                    <em className={styles.aboutStudio__title_emphasis}>{t('studio:section_slogan_emphasis_of')}</em>
                    <span className={styles.aboutStudio__title_word}>{t('studio:section_slogan_third')}</span>
                    <em className={styles.aboutStudio__title_emphasis}>{t('studio:section_slogan_emphasis_and')}</em>
                    <span className={styles.aboutStudio__title_word}>{t('studio:section_slogan_fourth')}</span>
                </h2>

                <p className={styles.aboutStudio__paragraph}>{t('studio:section_about_paragraph')}</p>

                <img className={styles.aboutStudio__feathers} src="assets/img/feathers.png" alt="feathers" />
            </section>
        );
    }
}
