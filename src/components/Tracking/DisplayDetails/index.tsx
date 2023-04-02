import styles from './styles.module.sass';
import Image from 'next/image';
import classnames from 'classnames'
import { MdArtTrack } from 'react-icons/md';
import { HiTruck } from 'react-icons/hi';
import TrackingDisplayDetailsCard from './Card';
import Moment from 'react-moment';
import { AiFillCheckCircle } from 'react-icons/ai';

type Props = {
    data: any
}

export default function TrackingDisplayDetails({ data }: Props) {
    return (
        <div className={styles.displaydetails}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.icon}>
                        {data.events.find((item: any) => item.code === "BDI") ? (
                            <AiFillCheckCircle />
                        ) : (
                            <HiTruck />
                        )}
                    </div>
                    <div className={styles.details}>
                        <p className={styles.title}>{data.type.category}</p>
                        {data.events.find((item: any) => item.code === "BDI") ? (
                            <p className={styles.createdAt}>foi entregue ao destinatário há <Moment from={data.events[0].createdAt.toString()} ago interval={1000} /></p>
                        ) : (
                            <p className={styles.createdAt}><Moment from={data.events[0].createdAt.toString()} ago interval={1000} /> em transito</p>
                        )}
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>{data.code}</p>
                </div>
            </div>

            <div className={styles.details}>
                <p className={styles.title}>Detalhes de rastreamento</p>

                <div className={styles.cards}>
                    {data.events.map((event: any, index: number) => (<TrackingDisplayDetailsCard name={event.description} location={event.location} createdAt={event.createdAt} type={event.code} key={index} />))}
                </div>
            </div>
        </div>
    )
}