import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'


const supportedChainIds = [4] // rinkeby chain id
const connectors = {
  injected: {},
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThirdwebWeb3Provider // add auth in all of the application
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
     <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
