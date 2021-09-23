import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-black dark:text-white transition-colors duration-100">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
