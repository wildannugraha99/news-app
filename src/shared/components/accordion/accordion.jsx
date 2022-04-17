import { useContext } from "react";
import { myContext } from "App";
import { Collapse } from "antd";
import React from "react";

import "./accordion.scss";

const Accordion = ({ title, children }) => {
  const { theme } = useContext(myContext);
  const { Panel } = Collapse;
  const widthBrowser = window.innerWidth;

  return (
    <div className={theme ? "accordion-darkmode" : "accordion"}>
      <Collapse defaultActiveKey={widthBrowser <= 912 ? 0 : 1}>
        <Panel header={title} key={1}>
          {children}
        </Panel>
      </Collapse>
    </div>
  );
};

export default Accordion;
