import Head from 'next/head'
import ChiaBalance from '../components/ChiaBalance'
import CMCTrendingLosers from '../components/CMCTrendingLosers'
import EthereumBalance from '../components/EthereumBalance'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Crypto Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="container mx-auto pt-5 pb-10">
        <h1 className="text-4xl font-bold">Crypto Board</h1>
      </header>
      <div className="container mx-auto grid grid-cols-2 gap-5">
        <ChiaBalance />
        <EthereumBalance />
      </div>
      {/* <div>
        <CMCTrendingLosers />
      </div> */}
    </div>
  )
}
