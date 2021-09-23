import Head from 'next/head'
import ChiaBalance from '../components/ChiaBalance'
import CMCTrendingLosers from '../components/CMCTrendingLosers'
import EthereumBalance from '../components/EthereumBalance'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2 px-3 sm:px-0">
      <Head>
        <title>Crypto Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="container mx-auto pt-5 pb-10">
        <h1 className="sm:w-3/4 md:w-2/3 text-4xl font-bold mx-auto text-blue-400">Crypto Board</h1>
      </header>
      <div className="container mx-auto">
        <div className="sm:w-3/4 md:w-2/3 grid sm:grid-cols-2 gap-5 mx-auto">
          <ChiaBalance />
          <EthereumBalance />
        </div>
      </div>
      {/* <div>
        <CMCTrendingLosers />
      </div> */}
    </div>
  )
}
