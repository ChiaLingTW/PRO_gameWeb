import React, { Component } from 'react';
import Axios from 'axios';

class Gameindex extends Component {
    state = {
        todoList: [
            { todoTableId: 1, title: "Job A", isComplete: true },
            { todoTableId: 2, title: "Job B", isComplete: false },
            { todoTableId: 3, title: "Job C", isComplete: true }
        ]
    }

    componentDidMount = async () => {
        var result = await Axios.get("http://localhost:8000/GameIndex");
        this.setState({
            todoList: result.data
        })
    }

    render() {
        return (
            <div className="container">
                <h1>遊戲商品清單</h1>

                <table className="table table-striped table-hover" style={{ backgroundColor: "white" }}>
                    <thead>
                        <tr>
                            <th>
                                項目名稱
                            </th>
                            <th>
                                描述
                            </th>
                            <th>
                                價格
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todoList.map((dataItem, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {/* 根據每個事項，顯示項目名稱{ todoItem.title } */}
                                            {dataItem.gameName}
                                        </td>
                                        <td>
                                            <span>{dataItem.gameText}</span>
                                            {/* 根據每個事項，顯示是否已完工checked={ (todoItem.isComplete) ? "checked" : ""} */}
                                            {/* <input className="check-box" disabled="disabled"
                                            type="checkbox" checked={(todoItem.isComplete) ? "checked" : ""} /> */}
                                        </td>
                                        <td>
                                            <span>{dataItem.gamePrice}</span>
                                            {/* <span>$500</span> */}
                                        </td>
                                        <td>
                                            <span className="float-right">
                                                <a href={`/GameInfo/${dataItem.gameId}`} className="btn btn-outline-primary btn-sm">詳細內容</a>
                                                {/* <a href={`/todo/edit/${todoItem.todoTableId}`} className="btn btn-outline-primary btn-sm">詳細內容</a> */}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
        );
    }
}


export default Gameindex;