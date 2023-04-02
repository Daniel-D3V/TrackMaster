import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Tracking from '@/components/Tracking';
import styles from './styles.module.sass';

type Props = {
    params: { [key: string]: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function TrackingPage({ params, searchParams }: Props) {
    const { tracking } = params;

    const response = await fetch(process.env.API_URL! + '/api/tracking', {
        method: 'POST',
        body: JSON.stringify({ trackingNumber: tracking })
    })

    const data = await response.json()

    return (
        <>
            <Header />
            <section id="tracking" className={styles.tracking}>
                <div className='container'>
                    <Tracking data={response.ok ? data : null} />
                </div>
            </section>
            <Footer />
        </>
    )
}