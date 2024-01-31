import { MoonIcon, SearchIcon } from "@chakra-ui/icons"
import { Box, ButtonGroup, Heading, IconButton } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import ContainerLg from "./Container"

const Header = () => {
    return (
        <Box as="header" borderBottom={'3px soild'}>
            <ContainerLg>
                <Box display={['block', null, 'flex']} h={100} alignItems={'center'} justifyContent={'space-between'}>
                    <Heading fontSize={24} color={'brand.100'}>
                            <Link to="/">Dashboard</Link>
                    </Heading>            
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
                </Box>
            </ContainerLg>
        </Box>
    )
}

const Nav = styled.nav`
    height: 100px;
    background-color: #fff;
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
        background-color: none;
    }
`

export default Header