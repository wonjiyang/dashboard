import { Card, CardBody, CardHeader, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from '../../../variables/charts'
import ColumnChart from '../../../component/charts/BarChart'

const DailyTraffic = () => {
    return (
        <Card display={'flex'} flexDir={'column'} justify={'space-between'}>
            <CardHeader>
                <Stat>
                    <StatLabel>Daily Traffic</StatLabel>
                    <StatNumber>2.7579h</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase' />
                        +2.45%
                    </StatHelpText>
                </Stat>
            </CardHeader>
            <CardBody h={260}>
                <ColumnChart chartData={barChartDataDailyTraffic} chartOptions={barChartOptionsDailyTraffic} />
            </CardBody>
        </Card>
    )
}

export default DailyTraffic