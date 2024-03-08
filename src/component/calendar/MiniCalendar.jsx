import { Card, CardHeader, Icon } from "@chakra-ui/react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css";
import "../../assets/css/MiniCalendar.css"
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MiniCalendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <Card
            align='center'
            direction='column'
            w='100%'
            p='20px 15px'>
            <CardHeader fontSize={18} fontWeight={600}></CardHeader>
            <Calendar 
                onChange={onChange} 
                value={value}
                prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
                nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />} />
        </Card>
    )
}

export default MiniCalendar