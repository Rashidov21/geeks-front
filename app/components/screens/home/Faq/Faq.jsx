import Image from 'next/image'
import styles from './Faq.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useState } from 'react';
import question from '../../../../../public/img/svg/question.svg';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [faqData] = useState([
        {
            id: 1,
            question: "Bu soha menga to'g'ri keladimi?",
            answer: "Sohada sizga qaysi yo'nalish to'g'ri kelishini bilmoqchi bo'lsangiz bizning yuqoridagi test platformamizdan test dan o'ting.",
        },
        {
            id: 2,
            question: "Kim meni o'qitadi?",
            answer: "O'z ishini ustalari 6 yildan ortiq tajribaga ega ustozlarimiz",
        },
        {
            id: 3,
            question: "O'rganganimdan so'ng ish topa olamanmi?",
            answer: "Ha albatta bizning kurslarimizni bitirgan talabalarimiz ayni damda katta IT company larda ishlashadi. Masalan : EPAM Uzbekistan, United IT Company, Micros Development, KOICA, Gyeonbuk Technopark. Ulardan 30% qismi onlayn freelancer bo‘lib katta freelance platformalarda ish faoliyatini olib borishadi.",
        },
        {
            id: 4,
            question: "Qanday kompyuter kerak bo'ladi?",
            answer: `Quyida biz minimal va tavsiya etiladigan kompyuter sifatlarini keltirib o'tamiz.
Minimal:
CPU - Core i3
RAM - 4 gb
ROM - SSD 128gb yoki 256gb
GPU - muhim emas
Tavsiya qilamiz:
CPU - Core i5 +
RAM - 8 gb
ROM - SSD 128gb yoki 256gb
GPU - 2gb yoki 4gb`,
        },
        {
            id: 5,
            question: "Mendan nimalar kerak bo'ladi?",
            answer: `Sizdan kuniga ortacha 3-4 soat vaqt , kompyuter va o'z ustingizda ishlashingiz kerak bo'ladi.`,
        },
        {
            id: 6,
            question: "Qanday usulda to’lovni amalga oshirsam bo’ladi?",
            answer: "Siz to'lovni har qanday usulda amalga oshirishingiz mumkun va bizda siz uchun to'lovni bo'lib tolash imkoniyatlari ham bor.",
        }
    ]);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faq}>
            <MyContainer>
                <div className={styles.faq__content}>
                    <div className={styles.faq__content__title}>
                        <h2>FAQ</h2>
                        <span>
                            <Image
                                src={question}
                                alt='question'
                            />
                        </span>
                    </div>
                    {
                        faqData.map((item, index) => (
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
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.0973301 11.5392V16.8389H5.46405V11.5392H0.0973301ZM5.46253 6.23905V11.5387L10.8293 11.5387V6.23905H5.46253ZM10.8304 6.24119L10.8304 0.941503H16.1972V6.23905L21.5624 6.23905V11.5387H16.1957V6.24119H10.8304ZM21.5661 16.8389V11.5392H26.9329V16.8389H21.5661Z" fill={openIndex === index ? '#1E1E1E' : '#FFFFFF'} />
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
                                    {
                                        (openIndex === index) &&
                                        <p>{item.answer}</p>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </MyContainer>
        </section>
    )
}

export default Faq;