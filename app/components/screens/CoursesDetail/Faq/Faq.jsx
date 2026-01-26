import Image from 'next/image';
import styles from './Faq.module.scss';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import { useState } from 'react';

const Faq = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faq}>
            <MyContainer>
                <div className={styles.faq__content}>
                    <div className={styles.faq__content__title}>
                        <h2>Ushbu kursda</h2>
                    </div>

                    {data.faqs?.map((item, index) => (
                        <div key={item.id} className={styles.faq__content__list}>
                            <div
                                data-aos="fade-up"
                                className={styles.faq__content__list__question}
                                onClick={() => toggleFaq(index)}
                                style={{
                                    borderBottomLeftRadius: openIndex === index ? '0' : '1rem',
                                    borderBottomRightRadius: openIndex === index ? '0' : '1rem',
                                    transition: 'all .3s ease',
                                    backgroundColor: openIndex === index ? '#1E1E1E' : '#333333',
                                }}
                            >
                                <h3
                                    style={{
                                        color: openIndex === index ? '#FFFFFF' : '#FFFFFF99',
                                    }}
                                    className={styles.faq__content__list__question__text}
                                >
                                    {item.question}
                                </h3>
                                <span
                                    className={styles.icon}
                                    style={{
                                        backgroundColor: openIndex === index ? '#FCE300' : '#1E1E1E',
                                        transform: openIndex === index ? 'rotate(0deg)' : 'rotate(180deg)',
                                        transition: 'all .3s ease',
                                    }}
                                >
                                    <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.0973301 11.5392V16.8389H5.46405V11.5392H0.0973301ZM5.46253 6.23905V11.5387L10.8293 11.5387V6.23905H5.46253ZM10.8304 6.24119L10.8304 0.941503H16.1972V6.23905L21.5624 6.23905V11.5387H16.1957V6.24119H10.8304ZM21.5661 16.8389V11.5392H26.9329V16.8389H21.5661Z"
                                            fill={openIndex === index ? '#1E1E1E' : '#FFFFFF'}
                                        />
                                    </svg>
                                </span>
                            </div>

                            <div
                                data-aos="fade-up"
                                className={styles.faq__content__list__answer}
                                style={{
                                    maxHeight: openIndex === index ? '500px' : '0',
                                    padding: openIndex === index ? '1rem' : '0 1rem',
                                    overflow: 'hidden',
                                    transition: 'all .3s ease',
                                    borderBottomLeftRadius: openIndex === index ? '1rem' : '0',
                                    borderBottomRightRadius: openIndex === index ? '1rem' : '0',
                                }}
                            >
                                {openIndex === index && <p>{item.answer}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </MyContainer>
        </section>
    );
};

export default Faq;
