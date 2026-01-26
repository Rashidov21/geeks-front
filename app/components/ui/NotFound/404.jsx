import Link from 'next/link'
import styles from './NotFound.module.scss'
import dino from '../../../../public/img/dino/dino-lose.png'
import Image from 'next/image'

const NotFound = () => {

    return (
        <div className={styles.container}>
            <Image
                src={dino}
                alt="404 Dino"
                width={100}
                height={100}
                className={styles.image}
            />
            <h1 className={styles.title}>404 - Sahifa topilmadi</h1>
            <p className={styles.text}>
                Cho‘lda qolganga o‘xshaysiz!
                <Link className={styles.link} href="/">Bosh sahifaga qaytish.</Link>
            </p>
        </div>
    )
}

export default NotFound;