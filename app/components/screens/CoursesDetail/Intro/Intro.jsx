import Image from 'next/image';
import Link from 'next/link';
import styles from './Intro.module.scss';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import komp from '../../../../../public/img/svg/komp.svg';
import phone from '../../../../../public/img/svg/phone.svg';
import heart from '../../../../../public/img/svg/heart.svg';
import InfoModal from '@/app/components/ui/Modal/InfoModal/InfoModal';
import RegisterModal from '@/app/components/ui/Modal/RegisterModal/RegisterModal';
import { useState } from 'react';

const Intro = ({ data, loader }) => {

    const [links] = useState([
        {
            id: 1,
            img: komp,
            text: 'Bilim ol',
        },
        {
            id: 2,
            img: phone,
            text: 'Rivojlan',
        },
        {
            id: 3,
            img: heart,
            text: 'Daromad qil!',
        },
    ]);

    return (
        <section className={styles.intro}>
            <MyContainer>
                <InfoModal />
                <RegisterModal />
                {loader ? (
                    <div className={styles.list}>
                        <div className={styles.list__loader}></div>
                    </div>
                ) : (
                    <div className={styles.intro__content}>
                        <Link href="/#course" className={styles.intro__content__backBtn}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Ortga qaytish
                        </Link>
                        <div className={styles.intro__content__left}>
                            <h1>{data.title}</h1>
                        </div>
                        <div className={styles.intro__content__right}>
                            <p>{data.description}</p>
                        </div>
                        <div className={styles.intro__content__bottom}>
                            <div className={styles.intro__content__bottom__marquee}>
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                                {links?.map((item, index) => (
                                    <div key={index} className={styles.intro__content__bottom__item}>
                                        <span className={styles.intro__content__bottom__item__img}>
                                            <Image src={item.img} alt="heart" />
                                        </span>
                                        <h3 className={styles.intro__content__bottom__item__text}>{item.text}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </MyContainer>
        </section>
    );
};

export default Intro;
