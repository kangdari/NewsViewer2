import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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

const Category = styled(NavLink)`
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    white-space: pre;
    color: black;

    &:hover{
        color: grey;
    }

    /* 현재 active 클래스 스타일링 */
    &.active{
        font-weight: 800;
            padding-bottom: 0.5rem;
            color: skyblue;
            border-bottom: 2px solid skyblue;
            &:hover{
                color: #3bc9db;
            }
    }

    & + & {
        margin-left: 1rem;
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

const Categories = () => {
    return (
        <CategoryBlock>
            {categories.map((cg, i) => 
                <Category 
                    key={i} 
                    // active: 기본값
                    activeClassName="active"
                    exact={cg.name === 'all'}
                    // to 값이 '/'이라면 exact 값을 ture로 설정해주어야 다음 NavLink 컴포넌트에 스타일이 적용안됨
                    // Route의 exact와 같음.
                    to={cg.name === 'all' ? '/' : `/${cg.name}`}
                    >
                    {cg.kr}
                </Category>
            )}
        </CategoryBlock>
    );
};

export default Categories;