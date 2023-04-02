import styles from './styles.module.sass';
import { HiTruck } from 'react-icons/hi';
import Link from 'next/link'

export default function TrackingNotFound() {
    return (
        <div className={styles.trackingNotFound}>
            <HiTruck className={styles.icon} />
            <p className={styles.title}>Objeto não encontrado</p>
            <p className={styles.description}>Não foi possível encontrar um objeto com este codigo informado!</p>
            <Link href="/"><button type='button' className={styles.button}>Tentar novamente</button></Link>
        </div>
    )
}