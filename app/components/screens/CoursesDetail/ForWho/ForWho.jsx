import Image from 'next/image';
import styles from './ForWho.module.scss';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import { useRouter } from 'next/router';

const ForWho = ({ data, loader }) => {
    const router = useRouter();
    const id = router.query;

    const count = id.courses_id;
    return (
        <section className={styles.forWho}>
            <MyContainer>
                <div className={styles.forWho__content}>
                    {loader ? (
                        <div className={styles.list2}>
                            <div className={styles.list2__loader}></div>
                        </div>
                    ) : (
                        <h2 className={styles.forWho__content__title}>Kimlar uchun ?</h2>
                    )}
                    {loader ? (
                        <div className={styles.list}>
                            <div className={styles.list__loader}></div>
                            <div className={styles.list__loader}></div>
                            <div className={styles.list__loader}></div>
                        </div>
                    ) : (
                        <div className={styles.forWho__content__list1}>
                            {data.for_who_list?.map((item, index) => (
                                <div key={index} data-aos="fade-up" className={styles.forWho__content__list1__item}>
                                    <span className={styles.number}>{index + 1}</span>
                                    <p className={styles.text}>{item.for_who}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {loader ? (
                        <div className={styles.list2}>
                            <div className={styles.list2__loader}></div>
                            <div className={styles.list2__loader}></div>
                            <div className={styles.list2__loader}></div>
                            <div className={styles.list2__loader}></div>
                        </div>
                    ) : (
                        <div className={styles.forWho__content__list2}>
                            {data.pluses_list?.map((item, index) => (
                                <div key={index} data-aos="fade-up" className={styles.forWho__content__list2__item}>
                                    <p className={styles.text}>{item.plus}</p>
                                    <span className={styles.icon}>
                                        <Image width={50} height={50} src={item.image} alt="icon" />
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </MyContainer>
        </section>
    );
};

export default ForWho;
