import { Card, CardBody, CardHeader, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '../../../variables/charts'
import LineChart from '../../../component/charts/LineChart'

const TotalSpent = () => {
    return (
        <Card display={'flex'} flexDir={'row'} justify={'space-between'}>
            <CardHeader>
            <Stat>
                <StatNumber>$37.5K</StatNumber>
                <StatLabel>Total Spent</StatLabel>
                <StatHelpText>
                <StatArrow type='increase' />
                +2.45%
                </StatHelpText>
            </Stat>
            </CardHeader>
            <CardBody>
                <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
            </CardBody>
        </Card>
    )
}

export default TotalSpent