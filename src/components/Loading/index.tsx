import { FaTruck } from 'react-icons/fa';
import styles from './styles.module.sass';

export default function Loading() {
    return (
        <div className={styles.loading}>
            <FaTruck className={styles.truck} />
            <div className={styles.terrain}></div>
        </div>
    )
}