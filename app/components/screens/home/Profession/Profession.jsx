import Link from 'next/link'
import Image from 'next/image'
import styles from './Profession.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import icons from '../../../../../public/img/svg/icons.svg'

const Profession = () => {

    return (
        <section className={styles.profession}>
            <MyContainer>
                <div data-aos="fade-up" className={styles.profession__content}>
                    <div className={styles.profession__content__left}>
                        <h2 className={styles.title}>Qaysi kasb sizga mos keladi ?</h2>
                        <b className={styles.subTitle}>Test orqali 15 daqiqa ichida bilib oling !</b>
                        <Link className={styles.btn} target='_blank' href={'https://test.pyblog.uz/'}>Testni boshlash</Link>
                    </div>
                    <div className={styles.profession__content__right}>
                        <Image
                            src={icons}
                            alt='icons'
                        />
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Profession;