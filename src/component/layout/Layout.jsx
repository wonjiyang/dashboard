import { Box, Container } from "@chakra-ui/react"
import Footer from "./Footer"
import Header from "./Header"
import ContainerLg from "./Container"

const Layout = (props) => {
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100vh'}>
            <Header />
        <Box as="main" id="main" flexGrow={1}>
            {props.showTitle && <h2>{props.title}</h2>}
                {props.children}
        </Box>
        <Footer />
        </Box>
    )
}

export default Layout