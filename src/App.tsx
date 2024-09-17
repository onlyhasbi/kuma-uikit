import { Flex, VStack } from "@kuma-ui/core";
import { Aperture, LibraryBig } from "lucide-react";
import Accordion from "./components/accordion";
import Text from "./components/text";
import { Sidebar } from "./layouts";

function App() {
  return (
    <Flex>
      <Sidebar w={225} isCollapsible>
        <Sidebar.Title bg={"red"}>
          <VStack alignItems={"center"} gap={2}>
            <LibraryBig size={65} color="#fff" />
            <Text>Malibs</Text>
          </VStack>
        </Sidebar.Title>
        <Sidebar.Content bg={"blue"} p={15}>
          {(collapsible) => (
            <Accordion
              title="Test collapsible"
              items={["test"]}
              isCollapsible={collapsible}
            />
          )}
        </Sidebar.Content>
        <Sidebar.Footer bg={"purple"}>Footer</Sidebar.Footer>
      </Sidebar>
      <Flex style={{ padding: 10 }} alignItems={"start"}>
        <Text icon={<Aperture size={20} />} iconPosition="right">
          test
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
