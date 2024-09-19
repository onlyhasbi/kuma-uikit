import { Box, Flex, VStack, VStackProps } from "@kuma-ui/core";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React from "react";
import { useSidebar } from "../hooks/useSidebar";
import { ChildrenProps } from "./types";

type Sidebar = {
  isCollapsible?: boolean;
  defaultCollapsibleWidth?: number;
} & React.PropsWithChildren &
  VStackProps;

function Sidebar({
  children,
  isCollapsible = false,
  w = 400,
  defaultCollapsibleWidth = 100,
  ...props
}: Sidebar) {
  const { collapsible, toggle } = useSidebar();
  const width = !isCollapsible
    ? defaultCollapsibleWidth
    : collapsible
    ? w
    : defaultCollapsibleWidth;

  return (
    <VStack
      minH={"100vh"}
      w={width}
      position={"relative"}
      color={"white"}
      transition="width 0.3s cubic-bezier(0.65, 0, 0.35, 1)"
      {...props}
    >
      <CollapsibleButton
        enabled={Boolean(children) && isCollapsible}
        value={collapsible}
        toggle={toggle}
      />
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<ChildrenProps>, {
              collapsible,
            })
          : child
      )}
    </VStack>
  );
}

Sidebar.Title = ({
  children,
  collapsible,
  ...props
}: Partial<ChildrenProps>) => {
  return (
    <Box
      flexBasis={"auto"}
      style={{ background: collapsible ? "orange" : "brown" }}
      {...props}
    >
      <Box
        py={collapsible ? 0 : 15}
        transform={collapsible ? "scale(.7)" : "scale(1)"}
        transition="transform 0.3s cubic-bezier(0.65, 0, 0.35, 1)"
      >
        {children as React.ReactNode}
      </Box>
    </Box>
  );
};

Sidebar.Content = ({
  children,
  collapsible,
  ...props
}: Partial<ChildrenProps>) => {
  return (
    <Box flexGrow={1} flexShrink={1} flexBasis={"auto"} {...props}>
      {typeof children == "function"
        ? children(Boolean(collapsible))
        : children}
    </Box>
  );
};

Sidebar.Footer = ({
  children,
  collapsible = false,
  ...props
}: Partial<ChildrenProps>) => {
  return (
    <Box {...props}>
      {typeof children === "function" ? children(collapsible) : children}
    </Box>
  );
};

const CollapsibleButton = ({
  enabled,
  value,
  toggle,
}: {
  enabled: boolean;
  value: boolean;
  toggle: () => void;
}) =>
  enabled ? (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      onClick={toggle}
      w={25}
      h={25}
      background={"blue"}
      position={"absolute"}
      color={"#fff"}
      right={-10}
      top={50}
      display={value ? "block" : "none"}
      zIndex={999}
      borderRadius={100}
      cursor={"pointer"}
    >
      {value ? <ChevronsLeft size={17} /> : <ChevronsRight size={17} />}
    </Flex>
  ) : null;

export default Sidebar;
