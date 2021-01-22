import { Provider } from 'next-auth/client'
import Header from "components/Header";

export default ({ Component, pageProps }) => {
  return (
      <Provider session={pageProps.session} >
        <Header />
        <Component {...pageProps} />
      </Provider>
  )
}