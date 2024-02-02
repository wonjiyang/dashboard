import { ListItem, UnorderedList } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Gnb = () => {
    return (
        <UnorderedList display={{sm: 'none', lg: 'flex'}} gap={'40px'} fontSize={'16px'}>
            <ListItem>
                <Link to="/">소개</Link>
            </ListItem>
            <ListItem>
                <Link to="/marketplace">서비스</Link>
            </ListItem>
            <ListItem>
                <Link to="/datatables">솔루션</Link>
            </ListItem>
            <ListItem>
                <Link to="/datatables">마켓플레이스</Link>
            </ListItem>
            <ListItem>
                <Link to="/datatables">요금</Link>
            </ListItem>
            <ListItem>
                <Link to="/datatables">고객지원</Link>
            </ListItem>
            <ListItem>
                <Link to="/datatables">파트너</Link>
            </ListItem>
            <ListItem>
                <Link to="/datatables">가이드센터</Link>
            </ListItem>
        </UnorderedList>
    )
}

export default Gnb