import { cx } from "@linaria/core";
import { useState } from "react";
import { flex, justify, vStack } from "../styles";
import { AccordionProps } from "./types";

function Accordion({ title, items, isCollapsible }: AccordionProps) {
  const [toggle, setCollapsible] = useState(!isCollapsible || false);

  const renderToggle = isCollapsible && (
    <button onClick={() => setCollapsible(!toggle)}>
      {toggle ? "-" : "+"}
    </button>
  );

  return (
    <div
      className={cx(
        vStack,
        justify(isCollapsible ? "space-between" : "center")
      )}
    >
      <div
        className={cx(flex)}
        // position={"relative"}
      >
        {title}
        {renderToggle}
      </div>
      {isCollapsible &&
        toggle &&
        items &&
        items?.length > 0 &&
        items?.map((item) => item)}
    </div>
  );
}

export default Accordion;
