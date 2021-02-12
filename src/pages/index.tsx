import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th
} from "@chakra-ui/react";

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import dynamic from "next/dynamic";

const PropertiesDynamic = dynamic(
    () => import("../components/Properties"), 
    {ssr: false}
)

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
                <PropertiesDynamic/>
            </Tbody>
        </Table>
        <DarkModeSwitch />
    </Container>
)

export default Index
