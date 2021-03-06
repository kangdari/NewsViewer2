import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NewsPage from './page/NewsPage'


function App() {

  return (
    <Switch>
      {/* ? category의 값이 선택적, category URL 파라미터가 없다면 전체 선택으로 간주함. */}
      <Route path='/:category?' component={NewsPage} exact/>
      
      {/* route 설정이 안된 경로 입력 시 */}
    </Switch>
  );
}

export default App;
