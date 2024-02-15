import { Box, SimpleGrid } from "@chakra-ui/react"
import MiniSt from "../../component/card/MiniSt"
import Icon from "../../component/icons/Icon"
import { MdOutlineBarChart } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { TbTableFilled } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";

const Home = () => {
    return (
        <Box>
            <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing='20px'>
                <MiniSt 
                    name="Earnings" 
                    value="$350.4" 
                    startContent={<Icon w={'60px'} h={'60px'} bg={'bgDefault'} icon={<MdOutlineBarChart />}/>} />
                <MiniSt
                    name="Spend this month" 
                    value="$642.39" 
                    startContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<IoDocuments />}/>} />
                <MiniSt
                    growth="10.39%"
                    name="Sales" 
                    value="$574.34" 
                    startContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<MdOutlineBarChart />}/>} />
                <MiniSt
                    name="Your Balance" 
                    value="$1,000"
                    endContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<TbTableFilled />}/>}/>
                <MiniSt
                    name="New Tasks" 
                    value="145" 
                    startContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<MdOutlineBarChart />}/>} />
                <MiniSt
                    name="Total Projects" 
                    value="$2433" 
                    startContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<IoMdHome />}/>} />
            </SimpleGrid>
        </Box>
    )
}

export default Home