import { ListItem, UnorderedList, Link } from "@chakra-ui/react"
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faCartShopping, faChartSimple, faHouse, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useState } from "react"

const Gnb = () => {
    const navArr = [
        {name: 'Main Dashboard', path: '/', icon: faHouse},
        {name: 'NFT Marketplace', path: '/marketplace', icon: faCartShopping},
        {name: 'Data Tables', path: '/datatables', icon: faChartSimple},
        {name: 'Profile', path: '/profile', icon: faUser},
        {name: 'Sign In', path: '/signin', icon: faLock},
    ]
    const location = useLocation(0)
    // const [isSelected, setisSelected] = useState(0)
    return (
        <UnorderedList 
            display={{base: 'none', lg: 'block'}} 
            paddingTop={'22px'} 
            fontSize={'16px'}>
            {navArr.map((item, index) => (
                <ListItem key={index}>
                    <Link
                        as={ReactRouterLink}
                        to={item.path}
                        position="relative"
                        display="flex"
                        alignItems="center"
                        gap="20px"
                        padding="13px 18px"
                        sx={{
                            // 조건부 스타일 적용
                            color: location.pathname === item.path ? 'primary' : 'gray.300', // 색상 변경
                            fontWeight: location.pathname === item.path ? 'bold' : 'inherit', // 글씨 굵기 변경
                            '&::after': {
                                content: '""',
                                display: location.pathname === item.path ? 'block' : 'none', // 선택 표시기
                                alignItems: 'center',
                                width: '4px',
                                height: '30px',
                                bg: 'primary',
                                position: 'absolute',
                                top: '8px',
                                right: 0,
                                bottom: '4px',
                                borderRadius: '4px',
                            },
                            _hover: {
                                bg: 'gray.100', // 마우스 호버 시의 배경색 변경
                            }
                        }}>
                        <FontAwesomeIcon icon={item.icon} />{item.name}
                    </Link>
                </ListItem>
            ))}
        </UnorderedList>
    )
}

export default Gnb