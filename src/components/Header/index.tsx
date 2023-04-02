import styles from './styles.module.sass'
import Image from 'next/image'
import classnames from 'classnames';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={classnames(styles.container, 'container')}>
                <Link className={styles.left} href="/">
                    <Image className={styles.logo} src="/logo.svg" width={50} height={50} alt="StabilizeME" />
                    <p className={styles.title}>TrackMaster</p>
                </Link>
                <div className={styles.right}>
                    <button type='button' className={styles.button}>Logar</button>
                </div>
            </div>
        </header>
    )
}