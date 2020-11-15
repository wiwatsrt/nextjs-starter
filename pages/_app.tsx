import { AppProps } from 'next/app'
import { AuthProvider } from '../context/authContext'

import '../styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
