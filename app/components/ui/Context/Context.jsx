import { createContext, useEffect, useState } from 'react';
const Context = createContext();

function Provider({ children }) {
    const [url] = useState('https://api.pyblog.uz/api');
    const [act, setAct] = useState(true);
    const [close, setClose] = useState(false);
    const [message, setMessage] = useState(false);
    const [coursesId, setCoursesId] = useState(0);
    const [infoModal, setInfoModal] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [messageText, setMessageText] = useState('');
    const [registerModal, setRegisterModal] = useState(false);

    return (
        <Context.Provider
            value={{
                url,
                act,
                setAct,
                close,
                setClose,
                message,
                setMessage,
                coursesId,
                setCoursesId,
                infoModal,
                setInfoModal,
                messageText,
                setMessageText,
                messageType,
                setMessageType,
                registerModal,
                setRegisterModal,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, Provider };
