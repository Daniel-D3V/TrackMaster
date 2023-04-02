import { HiTruck } from 'react-icons/hi';
import { FaBox } from 'react-icons/fa';
import { MdLocalPolice } from 'react-icons/md';
import { AiFillCheckCircle, AiTwotoneHome } from 'react-icons/ai';
import Moment from 'react-moment';
import 'moment/locale/pt-br';

import styles from './styles.module.sass';

type Props = {
    name: string,
    location: string,
    createdAt: Date | string,
    type: any
}

export default function TrackingDisplayDetailsCard({ name, location, createdAt, type }: Props) {
    return (
        <div className={styles.displayDetailsCard}>
            <div className={styles.icon}>
                {type === "PO" && (
                    <FaBox />
                )}

                {type === "RO" && (
                    <HiTruck />
                )}

                {type === "DO" && (
                    <HiTruck />
                )}

                {type === "PAR" && (
                    <MdLocalPolice />
                )}

                {type === "LDI" && (
                    <AiTwotoneHome />
                )}

                {type === "BDI" && (
                    <AiFillCheckCircle />
                )}
            </div>
            <div className={styles.details}>
                <p className={styles.title}>{location} <small className={styles.createdAt}>há {<Moment from={createdAt.toString()} ago interval={1000} />}</small></p>
                <p className={styles.description}>{name}</p>
            </div>
        </div>
    )
}