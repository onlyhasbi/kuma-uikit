import {
  BoxProps,
  Link,
  Text,
  TextProps,
  VStack,
  VStackProps,
} from "@kuma-ui/core";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React from "react";

type BaseProps = {
  label: string | React.ReactNode;
  path?: string;
  onSelected?: () => void;
  child?: Array<BaseProps>;
};

type MenuProps<T> = {
  menuContainerStyle?: VStackProps;
  menuBoxStyle?: BoxProps;
  menuLabelStyle?: TextProps;
  itemContainerStyle?: VStackProps;
  itemBoxStyle?: BoxProps;
  itemLabelStyle?: TextProps;
  data: Array<T>;
  child?: Array<T>;
};

type ItemMenuProps<T> = Omit<
  MenuProps<T>,
  | "menuContainerStyle"
  | "menuBoxStyle"
  | "menuLabelStyle"
  | "itemContainerStyle"
>;

const parentAtom = atomWithStorage<Array<string>>("parent_menu", []);
const childAtom = atomWithStorage<string>("child_menu", "");

const generateKey = (label: string, index: number) =>
  label.toLowerCase().split(" ").join("_").concat(`_${index}`);

function Menu({
  data,
  menuContainerStyle,
  menuBoxStyle,
  menuLabelStyle,
  itemContainerStyle,
}: MenuProps<BaseProps>) {
  const [active, setActive] = useAtom(parentAtom);
  const isActive = (path?: string) =>
    path && Boolean(active.length) && active?.includes(path);

  return (
    <VStack gap={10} {...menuContainerStyle}>
      {data.map((data, index) => {
        const { label, onSelected, child } = data;
        const key =
          typeof label == "string"
            ? generateKey(label, index)
            : index.toString();
        const handleClick = () => {
          onSelected?.();
          setActive((prev) =>
            !prev.length
              ? [key]
              : prev.includes(key)
              ? prev.filter((item) => item !== key)
              : [...prev, key]
          );
        };

        return (
          <VStack
            key={key}
            overflow={"hidden"}
            transition="all .25s ease-in-out"
            _hover={{ cursor: "pointer" }}
            {...menuBoxStyle}
            maxHeight={isActive(key) ? 99999 : menuBoxStyle?.maxH ?? 32}
          >
            <Text
              as={"h3"}
              onClick={handleClick}
              {...menuLabelStyle}
              zIndex={999}
            >
              {label}
            </Text>
            <VStack
              transformOrigin={"top"}
              transform={isActive(key) ? "translateY(0)" : "translateY(-100%)"}
              transition="transform .35s ease"
              {...itemContainerStyle}
            >
              <MenuItem data={child ?? []} />
            </VStack>
          </VStack>
        );
      })}
    </VStack>
  );
}

function MenuItem({ data, itemLabelStyle }: ItemMenuProps<BaseProps>) {
  const [active, setActive] = useAtom(childAtom);
  return data.map(({ label, path, onSelected }) => {
    const isActive = active == path;
    const handleClick = () => {
      onSelected?.();
      if (path && active != path) {
        setActive(path);
      }
    };

    return (
      <React.Fragment key={path}>
        <Link
          fontSize={14}
          marginLeft={12}
          onClick={handleClick}
          textDecoration={isActive ? "underline" : "none"}
          {...itemLabelStyle}
        >
          {label}
        </Link>
      </React.Fragment>
    );
  });
}

export default Menu;
