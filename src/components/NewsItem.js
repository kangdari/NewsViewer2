import React from 'react';
import styled from 'styled-components'

const NewsItemBlock = styled.div`
    display: flex;

    img{
        margin-right: 2rem;
        padding-bottom: 2rem;
        width: 170px;
        height: 150px;
        object-fit: cover;
    }

    a{
        color: black;
        text-decoration: none;
        &:hover{
            color: grey;
        }
        h2{
        margin: 0;
        margin-bottom: 1rem;
        }
    }
    p{
        margin: 0;
        white-space: normal;
    }

    & + & {
        margin-top: 4rem;
    }
    /* 768px 이하일 때 적용 */
    @media screen and (max-width: 768px){
        width: 700px;
    }
`

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage} = article

    return (
        <NewsItemBlock>
            {urlToImage &&
                <div className="thumbnail">
                    <a href={url} target="blank">
                       <img src={urlToImage} alt="img" />
                    </a>
                </div>
            }
            <div className="contents">
                <a href={url} target="blank">
                    <h2>{title}</h2>
                </a>
                <p>{description && description.length > 200 ? `${description.slice(0,200)}...` : description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;