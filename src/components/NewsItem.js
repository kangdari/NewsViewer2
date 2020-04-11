import React from 'react';
import styled from 'styled-components'

const NewsItemBlock = styled.div`
    display: flex;
    margin-top: 2rem;

    img{
        margin-right: 2rem;
        width: 170px;
    }

    h2{
        margin: 0;
    }
    p{
        margin: 0;
        white-space: normal;
    }


    & + & {
        margin-top: 4rem;
    }
`

const NewsItem = ({ sample }) => {
    const { title, description, url, img_url } = sample
    console.log(description.length)

    return (
        <NewsItemBlock>
            {img_url &&
                <div className="thumbnail">
                    <img src={img_url} alt="img" />
                </div>
            }
            <div className="contents">
                <h2>{title}</h2>
                <p>{description.length > 400 ? `${description.slice(0,200)}...` : description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;