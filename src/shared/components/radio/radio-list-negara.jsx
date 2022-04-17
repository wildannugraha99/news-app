import { Radio, Space } from "antd";
import { useLocation } from "react-router-dom";
import useSendQueryParam from "shared/services/useSendQueryParam.hook";

const RadioComponentNegara = ({ dataNegara }) => {
  const location = useLocation();
  const { state } = location;
  const { sendQueryParams } = useSendQueryParam();

  return (
    <Radio.Group value={state !== undefined ? state.country : "id"}>
      <Space direction="vertical">
        {dataNegara.map((value) => (
          <Radio
            value={value.id}
            key={value.id}
            onClick={() => sendQueryParams(value.id, value.data, "country")}
          >
            {value.data}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default RadioComponentNegara;
