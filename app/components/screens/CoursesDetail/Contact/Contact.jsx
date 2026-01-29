import Image from 'next/image';
import styles from './Contact.module.scss';
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import heart from '../../../../../public/img/svg/heart.svg';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
    const { url, setMessage, setMessageType, setMessageText, setCoursesId } = useContext(Context);
    const router = useRouter();
    const id = router.query;
    const [formData, setFormData] = useState({ name: '', courses: '', age: '', phone: '' });
    const [focused, setFocused] = useState({ name: false, age: false, phone: false });
    const [loader, setLoader] = useState(true);
    const [loaderForm, setLoaderForm] = useState(false);

    const formatPhoneNumber = (number) => {
        let newValue = number.replace(/\D/g, '');

        if (!newValue.startsWith('998')) {
            newValue = '998' + newValue;
        }

        if (newValue.length > 12) {
            newValue = newValue.slice(0, 12);
        }

        if (newValue.length > 3) newValue = newValue.replace(/^(\d{3})(\d+)/, '$1 $2');
        if (newValue.length > 6) newValue = newValue.replace(/^(\d{3}) (\d{2})(\d+)/, '$1 $2 $3');
        if (newValue.length > 9) newValue = newValue.replace(/^(\d{3}) (\d{2}) (\d{3})(\d+)/, '$1 $2 $3 $4');
        if (newValue.length > 11) newValue = newValue.replace(/^(\d{3}) (\d{2}) (\d{3}) (\d{2})(\d+)/, '$1 $2 $3 $4 $5');

        return newValue.trim();
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'phone') {
            const formattedPhone = formatPhoneNumber(value);
            setFormData({ ...formData, [id]: formattedPhone });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleFocus = (e) => {
        const { id } = e.target;
        setFocused({ ...focused, [id]: true });
    };

    const handleBlur = (e) => {
        const { id } = e.target;
        if (!formData[id]) {
            setFocused({ ...focused, [id]: false });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullUrl = `${url}/leads/`;

        if (formData.phone.replace(/\s/g, '').length === 12) {
            setLoaderForm(true);

            const requestData = {
                course: id.courses_id,
                fullname: formData.name,
                age: formData.age,
                phone: formData.phone.replace(/\s/g, ''),
            };

            console.log('Отправка данных:', requestData);
            console.log('URL:', fullUrl);

            try {
                const response = await fetch(fullUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });

                const data = await response.json();

                if (!response.ok) {
                    console.error('Server error response:', data);
                    setMessage(true);
                    setMessageType('error');
                    setMessageText(data.message || data.error || `Ошибка: ${response.status}`);
                    setLoaderForm(false);
                    return;
                }

                if (data.message?.status === 'success' || data.status === 'success') {
                    setMessage(true);
                    setMessageType('success');
                    setMessageText(data.message?.text || data.message || "Ma'lumot muvaffaqiyatli yuborildi!");
                    setLoaderForm(false);

                    setFormData({ name: '', courses: '', age: '', phone: '' });
                    setCoursesId(0);
                } else {
                    setMessage(true);
                    setMessageType(data.message?.status || 'error');
                    setMessageText(data.message?.text || data.message || 'Ошибка при отправке данных');
                    setLoaderForm(false);
                }
            } catch (error) {
                console.error('Error during POST request:', error);
                setMessage(true);
                setMessageType('error');
                setMessageText(error.message || 'Произошла ошибка при отправке');
                setLoaderForm(false);
            }
        } else {
            setMessage(true);
            setMessageType('warning');
            setMessageText("Telefon raqamingizni to'g'ri kiriting!");
        }
    };

    return (
        <section id="contact" className={styles.contact}>
            <MyContainer>
                <div className={styles.contact__content}>
                    <div className={styles.contact__content__left}>
                        <span className={styles.contact__content__left__text}>
                            <h2>Maqsadimiz</h2>
                            <p>Talabalarimiz eng kamida $500 daromad qilishlari</p>
                        </span>
                        <div className={styles.contact__content__left__element}>
                            <span className={styles.contact__content__left__element__img}>
                                <Image src={heart} alt="heart" />
                            </span>
                            <span className={styles.contact__content__left__element__text}>
                                <h2>vazifamiz</h2>
                                <p>sifatli ta’lim</p>
                            </span>
                        </div>
                        <span className={styles.contact__content__left__text}>
                            <h2>qadriyatimiz</h2>
                            <p>insoniylik va rivojlanish</p>
                        </span>
                    </div>
                    <div className={styles.contact__content__right}>
                        <h2 className={styles.contact__content__right__title}>Ro’yhatdan o’ting</h2>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputContainer}>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className={`${styles.placeholder} ${focused.name || formData.name ? styles.active : ''}`}
                                >
                                    Ismingizni
                                </label>
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="number"
                                    id="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label
                                    htmlFor="age"
                                    className={`${styles.placeholder} ${focused.age || formData.age ? styles.active : ''}`}
                                >
                                    Yoshingiz
                                </label>
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="text"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label
                                    htmlFor="phone"
                                    className={`${styles.placeholder} ${focused.phone || formData.phone ? styles.active : ''}`}
                                >
                                    Telefon raqamingizni
                                </label>
                            </div>
                            {loaderForm ? (
                                <div className={styles.load__btn}>
                                    <span className={styles.load__btn__loader}></span>
                                </div>
                            ) : (
                                <button type="submit" className={styles.submitButton}>
                                    Joy band qilish
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </MyContainer>
        </section>
    );
};

export default Contact;
