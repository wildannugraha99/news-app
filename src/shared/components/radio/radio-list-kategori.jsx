import { Radio, Space } from "antd";
import { useLocation } from "react-router-dom";
import useSendQueryParam from "shared/services/useSendQueryParam.hook";

const RadioComponentKategori = ({ dataKategori }) => {
  const location = useLocation();
  const { state } = location;
  const { sendQueryParams } = useSendQueryParam();

  return (
    <Radio.Group value={state !== undefined ? state.related : null}>
      <Space direction="vertical">
        {dataKategori.map((value) => (
          <Radio
            value={value.id}
            key={value.id}
            onClick={() => sendQueryParams(value.id, value.data, "category")}
          >
            {value.data}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default RadioComponentKategori;
