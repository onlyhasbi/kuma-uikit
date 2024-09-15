import { Flex, Text, VStack, k } from "@kuma-ui/core";
import { LibraryBig } from "lucide-react";
import Accordion from "./components/accordion";
import { Sidebar } from "./layouts";
import React from "react";

const styles = {
  accordion: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 10,
  } as React.CSSProperties,
  itemStyle: {
    overflow: "hidden",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  triggerStyle: {
    bg: "yellow",
    color: "black",
    display: "flex",
    alignItems: "center",
    height: 30,
    px: 10,
    borderRadius: 4,
  },
  labelStyles: {
    fontWeight: 500,
    fontSize: 13,
  },
  contentStyles: {
    gap: 1,
    background: "white",
  },
  itemLabelStyles: {
    fontSize: 12,
    paddingX: 5,
    paddingLeft: 20,
    paddingY: 5,
    bg: "red",
  },
};

function App() {
  return (
    <Flex>
      <Sidebar isCollapsible>
        <Sidebar.Title bg={"red"}>
          <VStack alignItems={"center"} gap={2}>
            <LibraryBig size={65} color="#fff" />
            <Text>Malibs</Text>
          </VStack>
        </Sidebar.Title>
        <Sidebar.Content bg={"blue"}>
          <Accordion
            type="single"
            style={styles.accordion}
            accordionItemStyle={styles.itemStyle}
            accordionTriggerStyle={styles.triggerStyle}
            accordionLabelStyle={styles.labelStyles}
            accordionContentStyle={styles.contentStyles}
            accordionItemLabelStyle={styles.itemLabelStyles}
            data={[
              {
                label: "Master",
                path: "/master",
                child: [
                  {
                    label: "Master 1",
                    path: "/master-1",
                  },
                  { label: "Master 2", path: "/master-2" },
                  { label: "Master 3", path: "/master-3" },
                ],
              },
              {
                label: "Program",
                path: "/program",
                child: [
                  { label: "Program 1", path: "/program-1" },
                  {
                    label: "Program 2",
                    path: "/program-2",
                  },
                  { label: "Program 3", path: "/program-3" },
                ],
              },
            ]}
            collapsible
          />
        </Sidebar.Content>
        <Sidebar.Footer bg={"purple"}>Footer</Sidebar.Footer>
      </Sidebar>
      <Flex style={{ padding: 10 }} alignItems={"start"}>
        <k.span>Tes</k.span>
        <k.input type="password" placeholder="*****" />
      </Flex>
    </Flex>
  );
}

export default App;
