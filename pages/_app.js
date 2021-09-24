import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-black dark:text-white transition-colors duration-100">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Crypto Board" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
