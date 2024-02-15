import { Box, Stack } from "@chakra-ui/react"
import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import History from "./History"
import Util from "./Util"
import DynamicTitle from "../common/DynamicTitle"

const Layout = () => {
    return (
        <Box 
            display={'flex'} 
            flexDir={'column'} 
            minH={'100vh'}
            bg={'rgb(244 247 254)'}>
            <Header />
            <Box
                as="main"
                id="main"
                flexGrow={1}
                pl={{ base: '12px', xl: 308 }}
                pr={{ base: '12px', xl: '12px' }}
                pt={{ base: 180, md: 110 }}
                transition={'all 0.2s'}
            >
                <Stack 
                    spacing={0} 
                    pos={'fixed'} 
                    top={'27px'} 
                    left={{ base: '4px', xl: '298px' }} 
                    right={'4px'} 
                    p={2}
                    flexDirection={{base: 'column', md: 'row'}}
                    justifyContent={'space-between'}
                    backdropFilter={'blur(10px)'}>
                    <Box>
                        <History />
                        <DynamicTitle />
                    </Box>
                    <Util />
                </Stack>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}

export const LayoutNone = () => {
    return (
        <Box 
            display={'flex'} 
            flexDir={'column'}
             minH={'100vh'}>
            <Box 
                as="main" 
                id="main" 
                flexGrow={1}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout