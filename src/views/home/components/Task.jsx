import { Card, CardBody, CardHeader, Checkbox, Stack } from "@chakra-ui/react"

const Task = () => {
    return(
        <Card>
            <CardHeader fontSize={18} fontWeight={600}>
                <Checkbox defaultChecked>Tasks</Checkbox>
            </CardHeader>
            <CardBody display={'block'} w={'100%'}>
                <Stack spacing={1}>
                    <Checkbox>Landing Page Design</Checkbox>
                    <Checkbox>Mobile App Design</Checkbox>
                    <Checkbox>Dashboard Builder</Checkbox>
                    <Checkbox>Landing Page Design</Checkbox>
                    <Checkbox>Dashboard Builder</Checkbox>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default Task