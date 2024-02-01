import { MoonIcon, SearchIcon } from "@chakra-ui/icons"
import { Box, Button, ButtonGroup, IconButton } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import ContainerLg from "./Container"
import { lighten } from "polished"

const Header = () => {
    return (
        <Box as="header" borderBottom={'3px soild'}>
            <ContainerLg>
                <Box display={['block', null, 'flex']} h={100} alignItems={'center'} justifyContent={'space-between'}>
                    <Logo fontSize={24} color={'red.100'}>
                            <Link to="/">Dashboard</Link>
                    </Logo>            
                    <Nav>
                        <NavList>
                            <li>
                                <Link to="/">Main Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/marketplace">NFT Marketplace</Link>
                            </li>
                            <li>
                                <Link to="/datatables">Data Tables</Link>       
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                        </NavList>
                    </Nav>
                    <IconBtnGroup>
                        <IconButton aria-label="Search detabase" icon={<SearchIcon />} />
                        <IconButton aria-label="Dark detabase" icon={<MoonIcon />} />
                    </IconBtnGroup>
                    <ButtonGroup>
                        <Button variant='outline' colorScheme='blue'>Save</Button>
                        <Button variant='cancel'>Cancel</Button>
                    </ButtonGroup>
                </Box>
            </ContainerLg>
        </Box>
    )
}

const Logo = styled.h1`
    font-size: 24px;
    color: ${(props) => props.theme.colors.brand[300]}; 
`

const Nav = styled.nav`
    height: 100px;
    background-color: ${({ theme }) => lighten(0.2, theme.colors.brand[500])};
`
const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    padding: 0 10px;
    margin: 0;
    list-style: none;
    li {
        width: 100%;
        text-align: center;
    }
    a {
        display: block;
    }
    @media screen and (min-width: 768px) {
        flex-direction: row;
        li {
            width: auto;
        }
        a {
            display: inline-block;
        }
    }
`
const IconBtnGroup = styled(ButtonGroup)`
    button {
        background-color: white;
    }
`

export default Header