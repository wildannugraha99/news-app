import { useContext } from "react";
import { myContext } from "App";
import { Divider, Skeleton, Tag, Empty, Switch } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

import { useNews } from "./news.hooks";

import "./news.scss";

import errorImg from "assets/images/error.png";
import emptyImg from "assets/images/empty.svg";

const News = () => {
  const { theme, setTheme } = useContext(myContext);
  const location = useLocation();

  const { dataNews, isLoading, dateFormat } = useNews();

  return (
    <div className={theme ? "News-darkmode" : "News"}>
      <div className="News-caption-wrapper">
        <h2 className="News-caption">
          {location.state
            ? location.state.country
              ? `Berita terbaru dari ${location.dataState}`
              : location.dataState && `Berita seputar ${location.dataState}`
            : `Berita terbaru dari Indonesia`}
        </h2>
        <div className="News-switch">
          <FontAwesomeIcon icon={faSun} size="lg" />
          <Switch defaultChecked={false} onChange={() => setTheme(!theme)} />
          <FontAwesomeIcon icon={faMoon} size="lg" />
        </div>
      </div>

      <div className="News-list">
        {dataNews <= 0 && (
          <Empty
            image={emptyImg}
            imageStyle={{
              height: 120,
              marginTop: "30px",
            }}
            description={
              <span>
                <h2>Oops...</h2>
                <h3 className="News-empty-text">
                  Berita yang anda cari tidak tersedia di data kami.
                </h3>
              </span>
            }
          />
        )}
        {dataNews.map((item, idx) => (
          <div key={idx} className="News-list-content">
            {isLoading ? (
              <Skeleton active />
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="News-list-link"
              >
                <div className="News-list-content--flex">
                  <div className="News-img-holder">
                    <img
                      src={item.urlToImage ? item.urlToImage : errorImg}
                      alt="gambar"
                      loading="lazy"
                      className="News-thumb-img"
                      onError={({ currentTarget }) => {
                        currentTarget.src = errorImg;
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="News-title">{item.title}</h3>
                    <small className="News-date">
                      {new Date(item.publishedAt).toLocaleDateString(
                        "id",
                        dateFormat
                      )}
                    </small>
                    <div className="News-tag-wrapper">
                      <Tag color="green">
                        {item.author ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: item.author }}
                          />
                        ) : (
                          "Anonymous"
                        )}
                      </Tag>

                      <Tag color="red">{item?.source?.name}</Tag>
                    </div>
                    <p>{item.description ? item.description : item.content}</p>
                  </div>
                </div>
              </a>
            )}
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
