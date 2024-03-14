import { Button, SimpleGrid, VStack } from "@chakra-ui/react"
import MiniSt from "../../component/card/MiniSt"
import Icon from "../../component/icons/Icon"
import { MdOutlineBarChart } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";
import { TbTableFilled } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import CheckTable from "./components/CheckTable";
import DailyTraffic from "./components/DailyTraffic";
import YourPieChart from "./components/YourPieChart";
import TotalSpent from "./components/TotalSpent";
import WeeklyRevenue from "./components/WeeklyRevenue";
// import ComplexTable from "./components/ComplexTable";
import Task from "./components/Task";
import MiniCalendar from "../../component/calendar/MiniCalendar";
import ComplexTableComm from "./components/ComplexTableComm";
import { useEffect, useState } from "react";

const Home = () => {
    // 컴포넌트가 마운팅될 때, 업데이트될 때, 언마운팅될 때 실행되는 useEffect
    useEffect(() => {
        // Mounting
        document.body.style.backgroundColor = 'yellow'
        document.body.id = 'intro'
        document.body.classList.add('intro')
        // Unmounting
        return () => {
            document.body.style.backgroundColor = ''
            document.body.id = ''
            document.body.classList.remove('intro')
        }
    }, [])
    // Updating
    const [color, setColor] = useState('yellow')
    const toggleColor = () => {
        setColor((prevColor) => (prevColor === 'yellow' ? 'lightblue' : 'yellow'))
    }
    useEffect(() => {
        console.log('색상이 변경되었습니다' ,color)
    }, [color])

    return (
        <VStack spacing={5}>
            <Button onClick={toggleColor}>배경색 변경</Button>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} spacing="20px" w={'100%'}>
                <MiniSt
                    name="Earnings"
                    value="$350.4"
                    startContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<MdOutlineBarChart />} />}
                />
                <MiniSt
                    name="Spend this month"
                    value="$642.39"
                    startContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<IoDocuments />} />}
                />
                <MiniSt growth="10.39%" name="Sales" value="$574.34" />
                <MiniSt
                    name="Your balance"
                    value="$1,000"
                    endContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<TbTableFilled />} />}
                />
                <MiniSt
                    name="New Tasks"
                    value="154"
                    startContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<MdOutlineBarChart />} />}
                />
                <MiniSt
                    name="Total Projects"
                    value="2935"
                    startContent={<Icon w={'56px'} h={'56px'} bg={'bgDefault'} icon={<IoMdHome />} />}
                />
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'} >
                <TotalSpent />
                <WeeklyRevenue />
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <CheckTable />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <DailyTraffic />
                    <YourPieChart />
                </SimpleGrid>
            </SimpleGrid>
            {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <ComplexTable />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <Task />
                    <MiniCalendar />
                </SimpleGrid>
            </SimpleGrid> */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <ComplexTableComm />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <Task />
                    <MiniCalendar />
                </SimpleGrid>
            </SimpleGrid>
        </VStack>
    )
}

export default Home