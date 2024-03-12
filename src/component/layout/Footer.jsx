import { Box, Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box as="footer" h={{base: 140, sm: 120, xl: 90}} p={4} ml={{base: 0, xl: 294}}>
            <Flex pt={3} pl={{base: 2, xl: 8}} pr={{base: 2, xl: 8}} justify={'space-between'} flexDirection={{base: 'column', xl: 'row'}} alignItems={'center'} color={'rgb(163 174 208)'} fontSize={{base: '12px', sm: '14px', md: '16px'}}>
                <Text mb={{base: 4, "2sm": 0}}>©2024 Horizon UI. All Rights Reserved.</Text>
                <Flex gap={8}>
                    <Text>Support</Text>
                    <Text>License</Text>
                    <Text>Teams of Use</Text>
                    <Text>Blogs</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer