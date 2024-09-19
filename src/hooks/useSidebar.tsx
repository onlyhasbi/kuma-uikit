import { atom, useAtom } from "jotai";

const collapsibleAtomSidebar = atom(false);

export const useSidebar = () => {
  const [collapsible, setIsCollapsed] = useAtom(collapsibleAtomSidebar);
  const toggle = () => setIsCollapsed(!collapsible);
  const iconToggle = () => !collapsible && setIsCollapsed(true);

  return { collapsible, toggle, iconToggle };
};
