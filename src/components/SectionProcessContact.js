import styles from './SectionProcessContact.module.scss';

import React, { Component } from 'react';
import Button from './Button';

export default class SectionProcessContact extends Component {
    render() {
        const { t } = this.props;

        return (
            <section className={styles.section_process_contact__container}>
                <h2 className={styles.section_process_contact__title}>{t('section-process-contact:title')}</h2>
                <div className={styles.section_process_contact__wrapper}>
                    <div className={styles.section_process_contact__card}>
                        <div className={styles.section_process_contact__card_wrapper}>
                            <img src="assets/img/process.jpeg" alt="process" className={styles.section_process_contact__process_img} />
                            <h2 className={styles.section_process_contact__card_title}>{t('section-process-contact:process-copy')}</h2>
                        </div>
                        <Button className={styles.section_process_contact__card_button} href="/process">
                            <svg className={styles.section_process_contact__button_icon} viewBox="0 0 26 9">
                                <path d="M0.211,3.435 L17.800,3.338 C17.800,2.038 17.795,1.288 17.749,0.133 C20.535,1.604 22.969,2.870 25.789,4.137 C23.030,5.495 20.615,6.731 17.749,8.142 C17.889,6.886 17.800,6.319 17.800,4.937 L0.211,4.746 L0.211,3.435 Z"></path>
                            </svg>
                        </Button>
                    </div>

                    <div className={styles.section_process_contact__card}>
                        <div className={styles.section_process_contact__card_wrapper}>
                            <img src="assets/img/contact.jpeg" alt="process" className={styles.section_process_contact__contact_img} />
                            <h2 className={styles.section_process_contact__card_title}>{t('section-process-contact:contact-copy')}</h2>
                        </div>
                        <Button className={styles.section_process_contact__card_button} href="/contact">
                            <svg className={styles.section_process_contact__button_icon} viewBox="0 0 26 9">
                                <path d="M0.211,3.435 L17.800,3.338 C17.800,2.038 17.795,1.288 17.749,0.133 C20.535,1.604 22.969,2.870 25.789,4.137 C23.030,5.495 20.615,6.731 17.749,8.142 C17.889,6.886 17.800,6.319 17.800,4.937 L0.211,4.746 L0.211,3.435 Z"></path>
                            </svg>
                        </Button>
                    </div>
                </div>
            </section>
        );
    }
}
