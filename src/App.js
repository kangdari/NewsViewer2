import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NewsPage from './page/NewsPage'

function App() {
  return (
    <Switch>
      <Route path='/' component={NewsPage} exact/>
      {/* route 설정이 안된 경로 입력 시 */}
    </Switch>
  );
}

export default App;
