import useSendQueryParam from "shared/services/useSendQueryParam.hook";

const useHeader = () => {
  const { sendQueryParams } = useSendQueryParam();

  const onSearch = (value) => {
    if (value) {
      sendQueryParams(value, value, "q");
    } else {
      alert("Mohon masukan berita yang ingin anda cari.");
    }
  };
  return { onSearch };
};

export default useHeader;
