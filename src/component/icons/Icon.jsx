import { Box } from "@chakra-ui/react"

const Icon = (props) => {
    const {icon, ...rest} = props
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'50%'}
            color={'primary'}
            fontSize={'22px'}
            {...rest}
        >
            {icon}
        </Box>
    )
}

export default Icon