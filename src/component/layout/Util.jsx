import { Avatar, Box, Button, ButtonGroup, Input, InputGroup } from "@chakra-ui/react"
import { faMoon } from "@fortawesome/free-regular-svg-icons"
import { faBell, faCircleExclamation, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Util = () => {
    return (
        <Box 
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            w={{base: '100%', md: '365px'}}
            mt={{ base: 2, md: 0 }}
            p={2}
            bg={'white'}
            color={'rgb(163 174 208/var(--tw-text-opacity))'}
            borderRadius={'30'}>
            <InputGroup 
                display={'flex'} 
                alignItems={'center'}
                w={{base: '500px', md: '225px'}}
                h={45}
                bg={'#F4F7FE'}
                borderRadius={'30'}
                mr={2}
                >
                <Button variant="icon" bg={'#f4f7fe'} borderRadius={30}><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>    
                <Input variant="icon" placeholder="Search" bg={'bgDefault'} fontSize={14} borderRadius={'30'}/>
            </InputGroup>
            <ButtonGroup
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-around'}
                w={{base: '40%', md: '117px'}}>
                <Button variant="icon">
                    <FontAwesomeIcon icon={faBell} />
                    <span className="blind"></span>
                </Button>
                <Button variant="icon">
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    <span className="blind"></span>
                </Button>
                <Button variant="icon">
                    <FontAwesomeIcon icon={faMoon} />
                    <span className="blind"></span>
                </Button>
                <Button variant="icon" w={'60px'}>
                    <Avatar w={'40px'} h={'40px'} name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                </Button>
            </ButtonGroup>
        </Box>
    )
}

export default Util