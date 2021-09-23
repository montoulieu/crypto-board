import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-200 transition-colors duration-100">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
