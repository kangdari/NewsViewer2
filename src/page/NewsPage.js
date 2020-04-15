import React, { useState } from 'react';
import NewsList from '../components/NewsList'
import Categories from '../components/Categories'

const NewsPage = ({ match }) => {

    // console.log(match.params)

    const [category, setCategory] = useState('all')
    const onSelect = (category) =>  setCategory(category) 

    return (
        <>
            <Categories category={category} onSelect={onSelect}/>
            <NewsList category={category}/>
        </>
    );
};

export default NewsPage;