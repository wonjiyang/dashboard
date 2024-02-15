import { Card, CardBody, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

const MiniSt = (props) => {
    const {startContent, name, value, endContent, growth} = props
    return (
        <Card h={120}>
            <CardBody py={15} display={'flex'} alignItems={'center'}>
                {startContent}
                <Stat ml={startContent ? 5 : 0}>
                    <StatLabel>{name}</StatLabel>
                    <StatNumber>{value}</StatNumber>
                    {growth ? (<StatHelpText>{growth}</StatHelpText>) : null}
                </Stat>
                {endContent}
            </CardBody>
        </Card>
    )
}

export default MiniSt