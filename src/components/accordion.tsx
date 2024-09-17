import { HStack, VStack } from "@kuma-ui/core";
import React, { useState } from "react";
import Text, { Icon } from "./text";

type Props = {
  title?: React.ReactNode;
  isCollapsible?: boolean;
  items?: Array<React.ReactNode>;
} & Icon;

function Accordion({ icon, iconPosition, title, items, isCollapsible }: Props) {
  const [toggle, setCollapsible] = useState(false);

  return (
    <VStack>
      <HStack justify={"space-between"} position={"relative"}>
        {title && (
          <Text
            icon={icon}
            iconPosition={iconPosition}
          >
            {title}
          </Text>
        )}
        {isCollapsible && (
          <button onClick={() => setCollapsible(!toggle)}>
            {toggle ? "-" : "+"}
          </button>
        )}
      </HStack>
      {isCollapsible &&
        toggle &&
        items &&
        items?.length > 0 &&
        items?.map((item) => <>{item}</>)}
    </VStack>
  );
}

export default Accordion;
