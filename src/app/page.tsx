"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InputSearch from "@/components/InputSearch";
import Loading from "@/components/Loading";
import { useState } from "react";
import styles from './page.module.sass';

export default function RootPage() {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Header />
            {isLoading ? (<Loading />) : (
                <section className={styles.Page}>
                    <div className={styles.container}>
                        <p className={styles.title}>TrackMaster</p>
                        <p className={styles.description}>O longe está cada vez mais perto</p>
                        <InputSearch setLoading={setIsLoading} />
                    </div>
                </section>
            )}
            <Footer />
        </>
    )
}