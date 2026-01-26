import Image from 'next/image'
import styles from './Statistics.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import phone from '../../../../../public/img/svg/phone.svg'
import pan from '../../../../../public/img/svg/pan.svg'
import money from '../../../../../public/img/svg/money.svg'
import container from '../../../../../public/img/svg/container.svg'

const Statistics = () => {
    return (
        <section id='about' className={styles.statistics}>
            <MyContainer>
                <div className={styles.statistics__content}>
                    <div className={styles.statistics__content__title}>
                        <span className={styles.statistics__content__title__img}>
                            <Image
                                src={phone}
                                alt='phone'
                            />
                        </span>
                        <h2>Geeks raqamlarda</h2>
                    </div>
                    <div className={styles.statistics__content__list}>
                        <div
                            data-aos="zoom-in"
                            className={styles.statistics__content__list__item}
                        >
                            <span className={styles.img}>
                                <Image
                                    src={pan}
                                    alt='icon'
                                />
                            </span>
                            <div className={styles.elements}>
                                <h3>10</h3>
                                <p>ortiq zamonaviy kurslar</p>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            className={styles.statistics__content__list__item}
                        >
                            <span className={styles.img}>
                                <Image
                                    src={container}
                                    alt='icon'
                                />
                            </span>
                            <div className={styles.elements}>
                                <h3>~7</h3>
                                <p>yil tajribaga ega ustozlar</p>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            className={styles.statistics__content__list__item}
                        >
                            <span className={styles.img}>
                                <Image
                                    src={money}
                                    alt='icon'
                                />
                            </span>
                            <div className={styles.elements}>
                                <h3>80%</h3>
                                <p>bitiruvchilar pul topishni boshlaydi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Statistics;