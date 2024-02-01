import Routers from "./Routers";
import './assets/scss/style.scss'
import {ChakraBaseProvider} from '@chakra-ui/react'
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </ChakraBaseProvider>
  )
}

export default App;
