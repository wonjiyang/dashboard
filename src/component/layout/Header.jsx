import { Box, Heading, Link } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import Gnb from "./Gnb"

const Header = () => {
    return (
        <Box
            as="header"
            id="header"
            position={'fixed'}
            top={0}
            left={{base: '-100%', xl: 0}}
            transition={'left 0.5s'}
            bottom={0}
            zIndex={1000} 
            w={292}
            bg={'white'}>
            <Heading 
                as={'h1'}
                fontSize={26}
                pt={14} pb={9} 
                textAlign={'center'} 
                borderBottom={'1px solid #CBD5E0'}>
                <Link 
                    as={ReactRouterLink} 
                    to="/" 
                    fontWeight={500}>
                    <strong>HORIZON</strong> FREE
                </Link>
            </Heading>
            <Gnb />
        </Box>
    )
}

export default Header