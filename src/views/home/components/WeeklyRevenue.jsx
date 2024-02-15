import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '../../../variables/charts'
import LineChart from '../../../component/charts/LineChart'

const WeeklyRevenue = () => {
    return (
        <Card display={'flex'} flexDir={'row'} justify={'space-between'}>
            <CardHeader>Weekly Revenue</CardHeader>
            <CardBody>
                <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
            </CardBody>
        </Card>
    )
}

export default WeeklyRevenue