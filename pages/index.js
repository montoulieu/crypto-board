import Head from 'next/head'
import ChiaBalance from '../components/ChiaBalance'
import CMCTrendingLosers from '../components/CMCTrendingLosers'
import DashboardHeader from '../components/DashboardHeader'
import EthereumBalance from '../components/EthereumBalance'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-5 sm:py-2 px-3 sm:px-0">
      <Head>
        <title>Crypto Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardHeader />
      <div className="container mx-auto">
        <div className="sm:w-3/4 md:w-2/3 grid sm:grid-cols-2 gap-5 mx-auto">
          <EthereumBalance />
          <ChiaBalance />
        </div>
      </div>
      {/* <div>
        <CMCTrendingLosers />
      </div> */}
    </div>
  )
}
