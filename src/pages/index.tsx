import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Properties } from "../components/Properties";

const Index = () => (
    <Container height="100vh">
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Property</Th>
                    <Th>Result</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Properties/>
            </Tbody>
        </Table>
        <DarkModeSwitch />
    </Container>
)

export default Index
