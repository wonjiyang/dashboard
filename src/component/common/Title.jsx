import { Heading } from "@chakra-ui/react"

export const Title = (props) => {
    return (
        <Heading as={'h3'} my={30} fontSize={30} fontWeight={700} color={'#222'}>
            {props.children}
        </Heading>
    )
}
export const TitleH2 = (props) => {
    return (
        <Heading as={'h2'} fontSize={'20px'} fontWeight={700}>
            {props.children}
        </Heading>
    )
}

export const TitleH3 = (props) => {
    return (
        <Heading as={'h2'} mb={5} fontSize={'24px'} fontWeight={700}>
            {props.children}
        </Heading>
    )
}

export const TitleH4 = (props) => {
    return (
        <Heading as={'h4'} my={30} fontSize={20} fontWeight={700} color={'darkblue'}>
            {props.children}
        </Heading>
    )
}