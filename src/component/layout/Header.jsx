import { Box, Button, ButtonGroup, Container, Heading, IconButton } from "@chakra-ui/react"
import { FaHamburger } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'
import Gnb from "./Gnb"

const Header = () => {
    return (
        <Box as="header" position={'fixed'} top={'0'} left={0} right={0} zIndex={100} bg={['rgba(0,0,0,.6)','rgba(0,0,0,.05);', null, null]} backdropFilter={'saturate(180%) blur(15px)'}>
            {/* tab */}
            <Box display={['none', null, null, null, 'block']} h={'32px'} bg={'rgba(0,0,0,.6)'}>
                <Container display="flex" justifyContent={'space-between'} alignItems={'center'}>
                    <ButtonGroup gap={'10px'}>
                        <Button colorScheme='teal' variant='linktnb'>
                            공공 기관용
                        </Button>
                        <Button colorScheme='teal' variant='linktnb'>
                            금융 클라우드
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup gap={'10px'}>
                        <Button colorScheme='teal' variant='linktnb'>
                            로그인
                        </Button>
                        <Button colorScheme='teal' variant='linktnb'>
                            회원가입
                        </Button>
                        <Button colorScheme='teal' variant='linktnb'>
                            Languages
                        </Button>
                    </ButtonGroup>
                </Container>
            </Box>
            {/* header */}
            <Box bg={'rgba(0,0,0,.05)'}>
                <Container
                    display={['flex', null, null, 'flex']}
                    h={100}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Heading as={'h1'} fontSize={24}>
                        <Link to="/">Dashboard</Link>
                    </Heading>
                    <Gnb/>
                    <ButtonGroup>
                        <IconButton variant='ghost' aria-label="Search database" display={{sm: 'flex', lg: 'none'}}><RiAccountCircleFill />
                        </IconButton>
                        <IconButton variant='ghost' aria-label="Search database" icon={<SearchIcon />} />
                        <IconButton variant='ghost' aria-label="Search database" display={{sm: 'flex', lg: 'none'}}><FaHamburger />
                        </IconButton>
                    </ButtonGroup>
                </Container>
            </Box>
        </Box>
    )
}

export default Header