"use client";

import styles from './styles.module.sass';
import { MdSearch, MdSend } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
    setLoading: (value: boolean) => void
}

export default function InputSearch({ setLoading }: Props) {

    const { push } = useRouter();

    const [trackingNumber, setTrackingNumber] = useState('');

    const handleChangeCode = (e: any) => {
        setTrackingNumber(e.target.value)
    }

    const handleClickSubmit = () => {
        const trackingNumberRegex = /^[A-Z]{2}\d{9}[A-Z]{2}$/;
        if (trackingNumber.length < 5 || !trackingNumberRegex.test(trackingNumber)) return Swal.fire({
            icon: 'error',
            title: 'Código inválido',
            text: 'Insira um código correto, veja o exemplo: XXXXXXXXXXXBR',
            customClass: {
                closeButton: styles.buttonClose
            }
        })

        push(`tracking/${trackingNumber}`)
        setLoading(true)
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            handleClickSubmit();
        }
    }

    return (
        <div className={styles.InputSearch}>
            <MdSearch className={styles.icon} />
            <input className={styles.input} onKeyUp={handleKeyDown} autoFocus={true} onChange={handleChangeCode} type="text" placeholder='Digite o código de rastreio' />
            <button className={styles.button} onClick={handleClickSubmit} type="submit"><MdSend /></button>
        </div>
    )
}