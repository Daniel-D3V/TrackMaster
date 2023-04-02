import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InputSearch from "@/components/InputSearch";
import styles from './page.module.sass';

export default function RootPage() {
    return (
        <>
            <Header />
            <section className={styles.Page}>
                <div className={styles.container}>
                    <p className={styles.title}>TrackMaster</p>
                    <p className={styles.description}>O longe está cada vez mais perto</p>
                    <InputSearch />
                </div>
            </section>
            <Footer />
        </>
    )
}