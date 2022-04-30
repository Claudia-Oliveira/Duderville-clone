import styles from './SectionCases.module.scss';

import React, { Component } from 'react';
import Button from './Button';
import classNames from 'classnames';

export default class SectionCases extends Component {
    render() {
        const { t } = this.props;

        return (
            <section className={classNames(styles.sectionCases__container, classNames)}>
                <h2 className={styles.sectionCases__title}>{t('home:cases__title')}</h2>

                <ul className={`${styles.list} ${styles.sectionCases__links} `}>
                    {t('home:navigation', { returnObjects: true }).map((item) => {
                        return (
                            <li key={item.button.copy} className={`${styles.item} ${styles.sectionCases__button_li}`}>
                                <Button href={item.button.href} className={styles.sectionCases__button_cases}>
                                    <span className={styles.sectionCases__button_order}>{item.button.number}</span>
                                    <span className={styles.sectionCases__button_label}>{item.button.copy}</span>
                                    <svg className={styles.sectionCases__button_icon} viewBox="0 0 16 5">
                                        <path
                                            fillRule="evenodd"
                                            d="M0.391,2.35 L10.945,1.976 C10.945,1.196 10.942,0.747 10.914,0.53 C12.586,0.936 14.47,1.696 15.739,2.456 C14.83,3.270 12.634,4.12 10.914,4.859 C10.998,4.105 10.945,3.765 10.945,2.936 L0.391,2.821 L0.391,2.35 Z"
                                        />
                                    </svg>
                                </Button>
                            </li>
                        );
                    })}
                    <li className={`${styles.item} ${styles.sectionCases__button_li}`}>
                        <Button href="/the-work" className={styles.sectionCases__button_cases_work}>
                            <span className={styles.sectionCases__button_label_work}>{t('home:button__more_work')}</span>
                            <svg className={styles.sectionCases__button_icon_work} viewBox="0 0 16 5">
                                <path
                                    fillRule="evenodd"
                                    d="M0.391,2.35 L10.945,1.976 C10.945,1.196 10.942,0.747 10.914,0.53 C12.586,0.936 14.47,1.696 15.739,2.456 C14.83,3.270 12.634,4.12 10.914,4.859 C10.998,4.105 10.945,3.765 10.945,2.936 L0.391,2.821 L0.391,2.35 Z"
                                />
                            </svg>
                        </Button>
                    </li>
                </ul>
            </section>
        );
    }
}
