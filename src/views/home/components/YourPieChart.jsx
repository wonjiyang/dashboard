import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import { pieChartData, pieChartOptions } from '../../../variables/charts'
import PieChart from '../../../component/charts/PieChart'

const YourPieChart = () => {
    return (
        <Card display={'flex'} flexDir={'column'} justify={'space-between'}>
            <CardHeader fontSize={18} fontWeight={600}>Your Pie Chart</CardHeader>
            <CardBody>
            <PieChart
                h='100%'
                w='100%'
                chartData={pieChartData}
                chartOptions={pieChartOptions}
            />

            </CardBody>
        </Card>
    )
}

export default YourPieChart