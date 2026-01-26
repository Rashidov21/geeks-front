import Head from 'next/head';
import Intro from '@/app/components/screens/CoursesDetail/Intro/Intro';
import Faq from '@/app/components/screens/CoursesDetail/Faq/Faq';
import Contact from '@/app/components/screens/CoursesDetail/Contact/Contact';
import Course from '@/app/components/screens/CoursesDetail/Course/Course';
import ForWho from '@/app/components/screens/CoursesDetail/ForWho/ForWho';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const CoursesDetail = () => {
    const { url } = useContext(Context);
    const router = useRouter();
    const id = router.query;
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    const [fullUrl, setFullUrl] = useState('');

    useEffect(() => {
        if (router.isReady) {
            const dynamicUrl = `${window.location.origin}${router.asPath}`;
            setFullUrl(dynamicUrl);
        }
    }, [router.isReady, router.asPath]);

    useEffect(() => {
        const fullUrl = `${url}/courses/${id.courses_id}`;
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                if (data) {
                    setData(data);
                    setLoader(false);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }
            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [id, data]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <meta name="description" content={data.description} />
                <meta
                    name="keywords"
                    content="GEEKS, GEEKS Andijan, Front-end, Back-end, Full-stack, IT-курсы, программирование, digital marketing, SMM, data science, веб-разработка"
                />
                <meta name="image_src" content="" /> // URL для img
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content={fullUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="GEEKS Andijan" />
                <meta property="og:locale" content="ru_RU" />
                <title>{data.title}</title>
            </Head>

            <Intro data={data} loader={loader} />
            <ForWho data={data} loader={loader} />
            <Faq data={data} loader={loader} />
            <Course data={data} loader={loader} />
            <Contact data={data} loader={loader} />
        </>
    );
};

export default CoursesDetail;
