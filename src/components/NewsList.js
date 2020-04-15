import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsItem from "./NewsItem";

import CircularProgress from "@material-ui/core/CircularProgress";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  width: 768px;
  margin: 0 auto;
  margin-bottom: 5rem;
  margin-top: 2rem;

  /* 768px 이하 적용 */
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
    /* overflow-x: auto; */
  }
`;

const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NewsList = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      console.log(category)
    // api 호출 함수
    const loadData = async () => {
      setLoading(true); // 로딩 시작...
      try {
        const query = category === `all` ? "" : category;
        await axios
          .get(
            `http://newsapi.org/v2/top-headlines?country=kr&category=${query}&apiKey=d3dd9d4eee754f6da75305ba06fd670d`
          )
          .then((res) => setData(res.data.articles));
      } catch (err) {
        console.log(err);
      }
      setLoading(false); // 호출 끝나면 로딩도 끝
    };
    loadData();
  }, [category]);

  // circle loading ...
  if (loading) {
    return (
      <LoadingBlock>
        <CircularProgress />
      </LoadingBlock>
    );
  }

  if (!data) {
    console.log("data is null");
    return null;
  }

  // data가 있으면 렌더링
  return (
    <NewsListBlock>
      {data.map((article, i) => (
        <NewsItem key={i} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
