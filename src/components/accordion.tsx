import { HStack, VStack } from "@kuma-ui/core";
import { useState } from "react";
import { AccordionProps } from "./types";

function Accordion({ title, items, isCollapsible }: AccordionProps) {
  const [toggle, setCollapsible] = useState(!isCollapsible || false);

  const renderToggle = isCollapsible && (
    <button onClick={() => setCollapsible(!toggle)}>
      {toggle ? "-" : "+"}
    </button>
  );

  return (
    <VStack>
      <HStack
        justify={isCollapsible ? "space-between" : "center"}
        position={"relative"}
      >
        {title}
        {renderToggle}
      </HStack>
      {isCollapsible &&
        toggle &&
        items &&
        items?.length > 0 &&
        items?.map((item) => item)}
    </VStack>
  );
}

export default Accordion;
