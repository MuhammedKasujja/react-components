import { Tab } from "@headlessui/react";
import { mergeClassNames } from "src/utils/utils";
import classes from "./Tabs.module.scss";
import { Tabsprops } from "./Tabs.types";

const Tabs: React.FC<Tabsprops> = ({ tabs }) => {
  return (
    <div className={mergeClassNames(classes.tab_container)}>
      <Tab.Group vertical>
        <Tab.List className={mergeClassNames(classes.tabs_list)}>
          {tabs.map((tab) => (
            <Tab
              key={tab.title}
              className={({ selected }) =>
                mergeClassNames(
                  classes.tab,
                  selected ? classes.tab_selected : classes.tab_unselected
                )
              }
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={mergeClassNames(classes.tab_panels_container)}>
          {tabs.map((tab, idx) => (
            <Tab.Panel
              key={idx}
              className={mergeClassNames(classes.tab_panels)}
            >
              {tab.component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
