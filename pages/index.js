import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bocoran Game Slot Online Terjitu di Indonesia" />
        <p className="description">
          Daftar sekarang dan dapatkan informasi seputar <a href="https://umbria-verde.net/">rtp slot</a> gacor di Terbit4D.
        </p>
      </main>

      <Footer />
    </div>
  )
}
