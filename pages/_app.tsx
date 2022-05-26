import { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element
}

type AppPropsWithLayout= AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  //si esxiste la property getLayout en el componente que se esta renderizando se retorna el layout, sino se retorna el page
  const getLayout = Component.getLayout || ((page) => page)
  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)

}

export default MyApp
