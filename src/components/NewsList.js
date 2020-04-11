import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'

import NewsItem from './NewsItem'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    width: 768px;
    margin: 0 auto;
    margin-bottom: 5rem;
    margin-top: 2rem;

    /* 768px 이하 적용 */
    @media (max-width: 768px){
        width: 100%;
        padding: 0 2rem;
        overflow-x: auto;

    }
`

const NewsList = ({ category }) => {
    const [data, setData] = useState([])
    console.log(category)

    useEffect(() => {
        axios.get(`http://newsapi.org/v2/top-headlines?country=kr&apiKey=d3dd9d4eee754f6da75305ba06fd670d`)
        .then(res => setData(res.data.articles))
    }, [])

    // console.log(data)

    return (
        <NewsListBlock>
            {!data ?
                <div>Loading...</div>
                : data.map((article, i) => 
                    <NewsItem key={i} article={article}/>
                )
            }
        </NewsListBlock>
    );
};

export default NewsList;