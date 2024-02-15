import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import Chart from 'react-apexcharts'

class TotalSpent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                chart: {
                    id: 'basic-bar',
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
            },
            series: [
                {
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
            ],
        }
    }

    render() {
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
                    <Chart options={this.state.options} series={this.state.series} type="line" margin="0"/>
                </CardBody>
            </Card>
        )
    }
}

export default TotalSpent