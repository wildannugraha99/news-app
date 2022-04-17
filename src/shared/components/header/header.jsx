import { useContext } from "react";
import { myContext } from "App";
import { PageHeader, Input } from "antd";
import useHeader from "./header.hook";

import "./header.scss";

const Header = ({ title, back }) => {
  const { theme } = useContext(myContext);
  const { Search } = Input;
  const { onSearch } = useHeader();

  return (
    <div className={theme ? "header-darkmode" : "header"}>
      <PageHeader
        onBack={back === true ? () => null : ""}
        className="site-page-header"
        title={title}
      >
        <Search
          placeholder="Cari berita"
          onSearch={onSearch}
          enterButton
          size="middle"
        />
      </PageHeader>
    </div>
  );
};

export default Header;
