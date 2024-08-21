import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 10)
  }, [])
  return (
    <>
      {loading &&
        <>
          <Analytics />
          <Component {...pageProps} />
        </>
      }
    </>
  )
}
