import type { AppProps } from 'next/app'
// import "andiary-ui/src/components/Button/Button.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}