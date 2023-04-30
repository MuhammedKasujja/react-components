import { createContext, useContext } from "react";

export const SidebarContext = createContext({ visible: true });

export const useSidebarContext = () => useContext(SidebarContext)