import React, { Component } from 'react';

class TodoIndex extends Component {
    state = {

    }

    render() {
        return (
            <div className="App">
                <h1>HelloJoy</h1>
                <a href="/myhome" className="btn btn-success" style={{ margin: 10 }}>首頁</a>
                <a href="/PeripheralInfo" className="btn btn-success" style={{ margin: 10 }}>周邊商品說明</a>
                <a href="/GameIndex" className="btn btn-danger" style={{ margin: 10 }}>遊戲清單</a>
                <a href="/GameInfo" className="btn btn-success" style={{ margin: 10 }}>遊戲商品說明</a>
                <a href="/LiveStream" className="btn btn-success" style={{ margin: 10 }}>實況</a>
                <a href="/Demo" className="btn btn-warning" style={{ margin: 10 }}>測試</a>
            </div>

        );
    }
}

export default TodoIndex;