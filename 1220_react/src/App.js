import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './joyCssPlay.css';
import './NavBar.css';
import './NavBar.css.map';

import Main from './components/main';
import myHome from './components/myHome';
import PeripheralInfo from './components/PeripheralInfo';
import GameInfo from './components/GameInfo';
import LiveStream from './components/LiveStream';
import LiveShow from './components/LiveShow';

import Demo_3 from './components/demo_3';

import GameIndex from './components/GameIndex';
import TodoIndex from './components/TodoIndex';
import TodoEdit from './components/TodoEdit';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={TodoIndex} exact />
            {/* 會員登入路由 */}
            <Route path="/memberLogin" component={Main} exact />
            {/* 首頁路由 */}
            <Route path="/myHome" component={myHome} exact />
            {/* 周邊商品詳細說明頁路由 */}
            <Route path="/PeripheralInfo/:peripheralId" component={PeripheralInfo} exact />
            {/* 遊戲詳細說明頁路由 */}
            <Route path="/GameIndex" component={GameIndex} exact />
            <Route path="/GameInfo/:gameId" component={GameInfo} exact />
            {/* 實況頁路由 */}
            <Route path="/LiveStream" component={LiveStream} exact />
            <Route path="/LiveStream/LiveShow" component={LiveShow} exact />

            <Route path="/Demo_3" component={Demo_3} exact />
            {/* 新增id在編輯頁的路由後面 */}
            <Route path="/todo/edit/:id" component={TodoEdit} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;