import React from 'react';
import styled , { css } from 'styled-components'
// import { NavLink } from 'react-router-dom'

const CategoryBlock = styled.div`
    display: flex;
    width: 768px;
    margin: 0 auto;
    padding: 2rem;

    @media(max-width: 768px){
        width: 100%;
        /* 내용이 잘리면 스크롤바 보이게 설정 */
        overflow-x: auto;
    }
`

const Category = styled.div`
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    white-space: pre;

    &:hover{
        color: grey;
    }

    & + & {
        margin-left: 1rem;
    }

    /* props 속성에 따른 css 적용 */
    ${props => 
        props.active && css`
            font-weight: bold;
            border-bottom: 2px solid skyblue;
            color: skyblue;
            &: hover{
                color: #3bc9db;
            }
        `
    }
`

const categories = [
    {
        name: 'all',
        kr: '전체보기'
    },
    {
        name: 'entertainment',
        kr: '엔터테인먼트'
    },
    {
        name: 'health',
        kr: '건강'
    },
    {
        name: 'science',
        kr: '과학'
    },
    {
        name: 'sports',
        kr: '스포츠'
    },
    {
        name: 'technology',
        kr: '기술'
    },

]

const Categories = ({ category, onSelect }) => {
    return (
        <CategoryBlock>
            {categories.map( (cg, i) => 
                <Category 
                    key={i} 
                    onClick={() => onSelect(cg.name)}
                    active={category === cg.name}
                    >
                    {cg.kr}
                </Category>
            )}
        </CategoryBlock>
    );
};

export default Categories;