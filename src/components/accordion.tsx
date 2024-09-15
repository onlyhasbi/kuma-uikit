import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Link,
  LinkProps,
  Text,
  TextProps,
  VStack,
  VStackProps,
} from "@kuma-ui/core";
import * as RadixAccordion from "@radix-ui/react-accordion";

type BaseProps = {
  label: string | React.ReactNode;
  path?: string;
  child?: Array<BaseProps>;
};

type MenuProps<T> = {
  accordionItemStyle?: BoxProps;
  accordionTriggerStyle?: FlexProps;
  accordionContentStyle?: VStackProps;
  accordionLabelStyle?: TextProps;
  accordionItemLabelStyle?: LinkProps;
  data: Array<T>;
} & RadixAccordion.AccordionSingleProps &
  React.RefAttributes<HTMLDivElement>;

const generateKey = (label: string, index: number) =>
  label.toLowerCase().split(" ").join("_").concat(`_${index}`);

function Accordion({
  data,
  accordionItemStyle,
  accordionTriggerStyle,
  accordionLabelStyle,
  accordionContentStyle,
  accordionItemLabelStyle,
  ...accordionRootProps
}: MenuProps<BaseProps>) {
  return (
    <RadixAccordion.Root
      {...(accordionRootProps as RadixAccordion.AccordionSingleProps)}
    >
      <>
        {data.map(({ label, child, path }, index) => {
          const key =
            typeof label == "string"
              ? generateKey(label, index)
              : index.toString();
          return (
            <RadixAccordion.Item key={key} value={path ?? ""} asChild>
              <Box {...accordionItemStyle}>
                <RadixAccordion.Header asChild>
                  <RadixAccordion.Trigger asChild>
                    <Flex cursor={"pointer"} {...accordionTriggerStyle}>
                      <Text {...accordionLabelStyle}>{label}</Text>
                    </Flex>
                  </RadixAccordion.Trigger>
                </RadixAccordion.Header>
                <RadixAccordion.Content asChild>
                  <VStack {...accordionContentStyle}>
                    {child?.map((item, index) => (
                      <Link key={index} {...accordionItemLabelStyle}>
                        {item.label}
                      </Link>
                    ))}
                  </VStack>
                </RadixAccordion.Content>
              </Box>
            </RadixAccordion.Item>
          );
        })}
      </>
    </RadixAccordion.Root>
  );
}

export default Accordion;
