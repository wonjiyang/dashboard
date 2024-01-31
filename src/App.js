import Routers from "./Routers";
import './assets/scss/style.scss'
import {ChakraBaseProvider} from '@chakra-ui/react'
import theme from "./theme";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Routers />
    </ChakraBaseProvider>
  )
}

export default App;
