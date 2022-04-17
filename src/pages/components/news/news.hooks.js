import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export const useNews = () => {
  const location = useLocation();
  const [dataNews, setDataNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { search } = location;
  const dateFormat = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const fetchingData = async () => {
    const fetchData = await fetch(
      `${process.env.REACT_APP_URL_SOURCE_API}${
        search ? search : `?country=id`
      }&apiKey=${process.env.REACT_APP_MY_KEY}`
    );
    try {
      const jsonData = await fetchData.json();
      if (!jsonData.articles) {
        throw new Error(jsonData.message);
      } else {
        setDataNews(jsonData.articles);
        setIsLoading(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong !",
        text: error,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchingData();
  }, [search]);

  return {
    dataNews,
    isLoading,
    dateFormat,
  };
};
