import { Card, CardHeader, Checkbox } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
import { tableDataCheck } from "../../../variables/tables"

const CheckTable = () => {
    return (
        <Card>
            <CardHeader>Check Table</CardHeader>
            <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>NAME</Th>
                  <Th>PROGRESS</Th>
                  <Th>QUANTITY</Th>
                  <Th>DATE</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tableDataCheck.map((row, index) => (
                <Tr key={index}>
                  <Td><Checkbox isChecked={row.checked} />{row.name}</Td>
                  <Td>{row.progress}</Td>
                  <Td>{row.quantity}</Td>
                  <Td>{row.date}</Td>
                </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
    )
}

export default CheckTable