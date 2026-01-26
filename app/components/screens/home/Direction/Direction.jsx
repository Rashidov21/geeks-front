import Link from 'next/link'
import Image from 'next/image'
import styles from './Direction.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useContext } from 'react';
import arrow from '../../../../../public/img/svg/arrow.svg'
import container from '../../../../../public/img/svg/container.svg'
import books from '../../../../../public/img/svg/books.svg'
import book from '../../../../../public/img/svg/book.svg'


const Direction = () => {
    const { lan } = useContext(Context);

    return (
        <section className={styles.direction}>
            <MyContainer>
                <div className={styles.direction__content}>
                    <div data-aos="zoom-in" className={styles.direction__content__left}>
                        <b className={styles.title}>Agar IT-da qanday kasb sizga mos kelishini va qaysi yo’nalishni tanlashni bilmasangiz bizni kasb aniqlovchi testimizdan o’ting</b>
                        <div className={styles.img}>
                            <Image
                                src={arrow}
                                alt='icons'
                            />
                            <Image
                                src={books}
                                alt='icons'
                            />
                            <Image
                                src={container}
                                alt='icons'
                            />
                        </div>
                    </div>
                    <div data-aos="zoom-in" className={styles.direction__content__right}>
                        <b className={styles.title}>Yoki barcha mavjud kurslar haqida to’liq ma’lumot beradigan va sizni qiziqtirgan savollaringizga javoblari bor qo’llanmani yuklab olish.</b>
                        <div className={styles.img}>
                            <Image
                                src={book}
                                alt='icons'
                            />
                        </div>
                        <Link target='_blank' className={styles.link} href={"https://test.pyblog.uz/static/Checklist.pdf"}>Qo’llanmani yuklab olish</Link>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Direction;