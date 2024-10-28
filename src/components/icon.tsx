import { HStack } from "@kuma-ui/core";
import { IconElement } from "./types";

function Icon({ icon, color, hover }: IconElement) {
  return !icon ? null : (
    <HStack
      alignItems={"center"}
      color={color}
      cursor={"pointer"}
      _hover={{
        color: hover,
      }}
    >
      {icon}
    </HStack>
  );
}

export default Icon;
