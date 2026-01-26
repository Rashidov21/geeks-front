import Head from 'next/head'
import Intro from '@/app/components/screens/home/Intro/Intro';
import About from '@/app/components/screens/home/About/About';
import Courses from '@/app/components/screens/home/Courses/Courses';
import Communication from '@/app/components/screens/home/Сommunication/Communication';
import Statistics from '@/app/components/screens/home/Statistics/Statistics';
import Faq from '@/app/components/screens/home/Faq/Faq';
import Dino from '@/app/components/screens/home/Dino/Dino';
import Contact from '@/app/components/screens/home/Contact/Contact';
import Profession from '@/app/components/screens/home/Profession/Profession';
import Direction from '@/app/components/screens/home/Direction/Direction';


const Index = () => {

    return (
        <>
            <Head>
                <meta name="google-site-verification" content="npa_bXEdioUVSvsm3LRXVvZ0D31E0OBLWfjNCbLzTYg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <meta name="description" content="GEEKS Andijan - учебный центр для будущих IT-специалистов. Современные курсы программирования, data science и digital marketing." />
                <meta name="keywords" content="GEEKS, GEEKS Andijan, GEEKS Andijon, Front-end, Back-end, Full-stack, IT-kurslar, dasturlash, digital marketing, SMM, data science, veb-dasturlash, UX/UI dizayn, mobil dasturlash, Python, JavaScript, React, Node.js, Java, C#, PHP, Laravel, SQL, NoSQL, DevOps, kiberxavfsizlik, sun’iy intellekt, mashina o‘rganish, data tahlili, dasturiy ta’minotni test qilish, QA, avtomatlashtirish, bulut texnologiyalari, startaplar, frilans, IT karyera, IT o‘qish, kod yozish, algoritmlar, o‘yin dasturlash, Swift, Kotlin, TypeScript, HTML, CSS, Django, IT-kompaniyalar, IT-jamoa, UX tadqiqotlar, ijtimoiy tarmoqlarda marketing, nishonga olingan reklama, bolalar uchun dasturlash, GEEKS, GEEKS Andijan, GEEKS Andijon, Front-end, Back-end, Full-stack, IT-курсы, программирование, digital marketing, SMM, data science, веб-разработка, UX/UI дизайн, мобильная разработка, Python, JavaScript, React, Node.js, Java, C#, PHP, Laravel, SQL, NoSQL, DevOps, кибербезопасность, искусственный интеллект, машинное обучение, аналитика данных, тестирование ПО, QA, автоматизация, облачные технологии, стартапы, фриланс, карьера в IT, обучение IT, кодинг, алгоритмы, разработка игр, Swift, Kotlin, TypeScript, HTML, CSS, Django, IT-компании, IT-сообщество, UX-исследования, маркетинг в соцсетях, таргетированная реклама, программирование для детей, GEEKS, GEEKS Andijan, GEEKS Andijon, Front-end, Back-end, Full-stack, IT courses, programming, digital marketing, SMM, data science, web development, UX/UI design, mobile development, Python, JavaScript, React, Node.js, Java, C#, PHP, Laravel, SQL, NoSQL, DevOps, cybersecurity, artificial intelligence, machine learning, data analytics, software testing, QA, automation, cloud technologies, startups, freelancing, IT career, IT education, coding, algorithms, game development, Swift, Kotlin, TypeScript, HTML, CSS, Django, IT companies, IT community, UX research, social media marketing, targeted advertising, programming for kids" />
                <meta name="author" content="Mukhammadjonov Javlonbek" />
                <meta name="image_src" content='http://api.geeks.pyblog.uz/media/specialist_courses/logo.png' />
                <link rel="canonical" href="https://geeksandijan.uz/" />

                <meta property="og:title" content="GEEKS Andijan - Учебный центр для будущих IT-профессионалов" />
                <meta property="og:description" content="Изучи востребованные навыки программирования и начни карьеру в IT c GEEKS!" />
                <meta property="og:image" content="http://api.geeks.pyblog.uz/media/specialist_courses/logo.png" />
                <meta property="og:url" content="https://geeksandijan.uz/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="GEEKS Andijan" />
                <meta property="og:locale" content="ru_RU" />

                <title>GEEKS Andijan</title>
            </Head>

            <Intro />
            <About />
            <Courses />
            <Direction />
            <Profession />
            <Communication />
            <Statistics />
            <Faq />
            <Contact />
            <Dino />
        </>
    )
}

export default Index;