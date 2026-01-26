import Layout from "@/app/components/layout/Layout";
import '@/app/assets/globals.scss';
import { Provider } from "@/app/components/ui/Context/Context";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyApp = ({ Component, pageProps }) => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    // useEffect(() => {
    //     const handleContextMenu = (e) => e.preventDefault();

    //     const handleKeyDown = (e) => {
    //         const blockedKeys = [
    //             { keyCode: 123 },
    //             { ctrl: true, shift: true, key: 'I' },
    //             { ctrl: true, shift: true, key: 'C' },
    //             { ctrl: true, shift: true, key: 'J' },
    //             { ctrl: true, key: 'U' },
    //             { ctrl: true, key: 'S' },
    //         ];

    //         const isBlocked = blockedKeys.some((key) =>
    //             key.keyCode
    //                 ? e.keyCode === key.keyCode
    //                 : key.ctrl === e.ctrlKey &&
    //                 key.shift === e.shiftKey &&
    //                 e.key === key.key
    //         );

    //         if (isBlocked) e.preventDefault();
    //     };

    //     document.addEventListener('contextmenu', handleContextMenu);
    //     document.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         document.removeEventListener('contextmenu', handleContextMenu);
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);


    return (
        <Provider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};

export default MyApp;
