import React, { Component } from 'react';
import Axios from 'axios';                              // 串連 NodeJS
import NavBar from "./NavBar";                          // 導欄列

import authHeader from './authHeader';


class PeripheralInfo extends Component {
    state = {
        memberUser: [{}],           // 會員
        data: [{}],
        photoTest: [{}],            // 周邊圖片
        cartTest: [{ peripheralId: "", peripheralName: "", peripheralQty: "", peripheralPrice: "", peripheralSpec: "", uid: "" }],
        // cartTest: [{}],
    }

    componentDidMount = async () => {
        // 會員登入
        // let memberResult = await Axios.get("http://localhost:8000/member/memberinfo", {
        //     header: authHeader(),
        // });
        // this.state.memberUser = memberResult.data;
        // console.log(this.state.memberUser);

        var result = await Axios.get(`http://localhost:8000/PeripheralInfo/${this.props.match.params.peripheralId}`);
        this.state.data = result.data;
        var result_2 = await Axios.get(`http://localhost:8000/PeripheralSpec/${this.state.data.peripheralId}`);
        this.state.newSpec = result_2.data;
        console.log(this.state.newSpec);
        var result_3 = await Axios.get(`http://localhost:8000/PeripheralPic/${this.state.data.peripheralId}`);
        this.state.photoTest = result_3.data;
        // console.log(this.state.photoTest[1].peripheralPhotoGroup);
        document.getElementById('photoA').src = this.state.photoTest[0].peripheralPhotoGroup;
        document.getElementById('photoB').src = this.state.photoTest[1].peripheralPhotoGroup;

        this.setState({});
    }

    cartTestClick = async () => {
        // alert("2022-12-17");        
        this.state.cartTest[0].peripheralId = this.state.data.peripheralId;  ///// 該周邊編號       
        this.state.cartTest[0].peripheralName = this.state.data.peripheralName;  ///// 該周邊名稱
        this.state.cartTest[0].peripheralQty = document.getElementById('newQty').value;  ///// 數量
        this.state.cartTest[0].peripheralPrice = this.state.data.peripheralPrice;  ///// 價格
        this.state.cartTest[0].peripheralSpec = document.getElementById('newSpec').value;  ///// 規格
        this.state.cartTest[0].uid = "123";  ///// 會員編號
        console.log(this.state.cartTest[0])
        var result = await Axios.post("http://localhost:8000/cartListTest", this.state.cartTest[0]);
        console.log(result);
        this.setState({})
    }


    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container" style={{ position: "relative", top: "65px" }}>
                    {/* 索引條 全部商品→周邊分類→周邊名稱*/}
                    <div className="p-2">
                        <a href="/" style={{ color: "white", fontSize: "14px" }}>所有 周邊</a> &gt;&nbsp;
                        <a href="/" style={{ color: "white", fontSize: "14px" }}>類別 {this.state.data.peripheralClass}</a> &gt;&nbsp;
                        <span style={{ color: "white", fontSize: "14px" }}>{this.state.data.peripheralName}</span>
                    </div>
                    {/* 周邊封面區 periPhotoCover\ */}
                    <div className="row">
                        <div className="col-12 col-md-6 periPhotoCoverBox p-3">
                            <img src={this.state.data.peripheralPhotoGroup} alt="周邊商品封面圖片" />
                        </div>
                        {/* 周邊介紹、規格選擇購買按鈕區 periBuyCard */}
                        <div className="col-12 col-md-6 periDetail p-3" >
                            <h3>{this.state.data.peripheralName}</h3>
                            <h6>➤ 品牌【{this.state.data.peripheralBrand}】</h6>
                            <h6>➤ {this.state.data.peripheralText}</h6><br />
                            <h6>★★ 全館貨到付款 ★★</h6>
                            <hr />
                            <form action="" method="post">
                                <select id="newSpec" name="newSpec">
                                    {/* <option>{this.state.data.peripheralProduct}{this.state.data.peripheralProduct2}</option> */}
                                    <option>請選擇商品規格</option>
                                    {this.state.newSpec.map((newItem, index) => {
                                        return (
                                            <div key={index}>
                                                <option>{newItem.peripheralProduct}{newItem.peripheralProduct2}</option>
                                            </div>
                                        )
                                    })}
                                </select>&nbsp;&nbsp;&nbsp;｜&nbsp;&nbsp;&nbsp;
                                <select id="newQty" name="newQty">
                                    <option>請選擇數量</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </select>
                                <h4 id="newPrice">NT$ {this.state.data.peripheralPrice}</h4>
                                <div className="btn btn-success" onClick={this.cartTestClick}>
                                    加入購物車
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* 周邊說明的圖片區 */}
                    <div className="row periPhotoGroup">
                        <h3>本商品詳細介紹</h3>
                        <div className="col-md-12 periPhotoGroupA">
                            {/* 周邊說明圖片第一張 */}
                            <div className="periPhotoA">
                                <img id="photoA" src={this.state.photo_1} alt="圖片說明" />
                            </div>
                            {/* 周邊說明圖片第二張  */}
                            <div className="periPhotoA">
                                <img id="photoB" src={this.state.photo_2} alt="圖片說明" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }


}

export default PeripheralInfo;