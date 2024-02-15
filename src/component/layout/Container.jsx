import { Box, Container } from "@chakra-ui/react"

const ContainerLg = (props) => {
    return (
        <Container maxW={1280} mx={'auto'} py={'20px'} px={['20px', null, 0]}>
            {props.children}
        </Container>
    )
}

export const Section =(props) => {
    return (
        <Box py={'100px'}>
            {props.children}
        </Box>
    )
}

export default ContainerLg