import React from 'react';
import NewsList from '../components/NewsList'
import Categories from '../components/Categories'

const NewsPage = ({ match }) => {
    // const [category, setCategory] = useState('all')
    // const onSelect = (category) =>  setCategory(category) 

    // URL 파라미터를 사용하여 category 값 설정
    // category의 기본값은 all
    const category = match.params.category || 'all'

    return (
        <>
            <Categories />
            <NewsList category={category}/>
        </>
    );
};

export default NewsPage;