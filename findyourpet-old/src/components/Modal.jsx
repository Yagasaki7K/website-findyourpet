import React, { useEffect, useState } from "react";

import { Backdrop, ModalDetails, ModalContent, ModalHeader } from "./ModalDetails";

import Logo from '../../assets/logo-white.png'
import Googleplay from '../../assets/googleplay.png'

const DOWNLOAD_NOTICE_KEY = "hasOpenedModal";

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasOpenedModal = localStorage.getItem(DOWNLOAD_NOTICE_KEY);

        if (!hasOpenedModal) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, []);

    function handleCloseModal() {
        localStorage.setItem(DOWNLOAD_NOTICE_KEY, true);
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && (
                <>
                    <ModalDetails>
                        <ModalHeader>
                            <img src={Logo} />
                        </ModalHeader>

                        <ModalContent>
                            <h1>
                                Que tal usar pelo App?
                            </h1>

                            <p>
                                Pelo app é bem mais rápido e fácil de usar, além de
                                ter as informações na palma da sua mão!
                            </p>

                            <a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1" target="_blank" rel="noreferrer">
                                <img src={Googleplay} alt="" />
                            </a>
                        </ModalContent>
                    </ModalDetails>
                    <Backdrop onClick={handleCloseModal} />
                </>
            )}
        </>
    )
}
