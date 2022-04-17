import { useHistory } from "react-router-dom";

const useSendQueryParam = () => {
  const history = useHistory();

  const sendQueryParams = (value, data, query) => {
    history.push({
      pathname: "/",
      search: `?${query}=${value}`,
      state: query === "country" ? { country: value } : { related: value },
      dataState: data,
    });
  };
  return { sendQueryParams };
};

export default useSendQueryParam;
