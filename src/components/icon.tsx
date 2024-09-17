import { HStack } from "@kuma-ui/core";
import { IconElement } from "./types";

function Icon({ icon }: IconElement) {
  return !icon ? null : <HStack alignItems={"center"}>{icon}</HStack>;
}

export default Icon;
