import React, { useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'

import NewsItem from './NewsItem'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    width: 768px;
    margin: 0 auto;


    /* 768px 이상 적용 */
    @media (max-width: 768px){
        width: 100%;
        padding: 0 2rem;
    }
`

const NewsList = () => {

    useEffect(() => {
        axios.get(`http://newsapi.org/v2/top-headlines?country=kr&apiKey=d3dd9d4eee754f6da75305ba06fd670d`)
        .then(res => console.log(res))
    }, [])

    // d3dd9d4eee754f6da75305ba06fd670d

    const sample = {
        title: 'title',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        url: 'https://www.naver.com',
        img_url: 'https://via.placeholder.com/150'
    }

    return (
        <NewsListBlock>
            <NewsItem sample={sample}/>
            <NewsItem sample={sample}/>
            <NewsItem sample={sample}/>
        </NewsListBlock>
    );
};

export default NewsList;