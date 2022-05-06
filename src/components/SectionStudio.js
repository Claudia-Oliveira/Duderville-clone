import styles from './SectionStudio.module.scss';

import React, { Component } from 'react';
import Button from './Button';

export default class SectionStudio extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <h2 className={styles.sectionStudio__pages_title}>{t('home:studio__title')}</h2>

                <h2 className={styles.sectionStudio__title}>
                    <em className={styles.sectionStudio__title_emphasis}> {t('home:slogan__word_a')}</em> {t('home:slogan__words')}
                    <span className={styles.sectionStudio__title_word}>{t('home:slogan__word_studio')}</span>
                    <em className={styles.sectionStudio__title_emphasis}>{t('home:slogan__word_in')}</em> {t('home:slogan__word_place')}
                </h2>
                <div className={styles.sectionStudio__button_wrapper}>
                    <Button className={styles.sectionStudio__button_cta} href="/studio">
                        {t('home:studio__button')}
                    </Button>
                </div>
            </>
        );
    }
}
