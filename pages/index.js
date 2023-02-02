import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Crop Survival</title>
        <meta name='description' content='Plan, Plant, Survive' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontSize: 60, textAlign: 'center' }}>Crop Survival</h1>
          <h2 style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>
            Plant, Hunt, Survive
          </h2>
          <a
            href='https://github.com/justin-dupre/Crop-Survival-Web/releases/download/untagged-6b08f191db75daacf266/CropSurvival.exe'
            target='_blank'
            rel='noopener noreferrer'
            download
          >
            <h3
              style={{
                fontSize: 35,
                textAlign: 'center',
                marginTop: 30,
              }}
            >
              Download now!
            </h3>
          </a>
        </div>
      </main>
    </>
  );
}
