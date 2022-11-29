import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '~/contexts/AuthContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} theme="colored" />
    </AuthProvider>
  )
}

export default MyApp
