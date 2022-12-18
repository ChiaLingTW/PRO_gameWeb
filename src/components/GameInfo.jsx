import React, { Component } from 'react';
import Axios from 'axios';                              // 串連 NodeJS
import Tabs from "./tabs";                              // Tab 頁變換效果
import NavBar from "./NavBar";                          // 導欄列

import "react-responsive-carousel/lib/styles/carousel.min.css"; // 輪播效果
import { Carousel } from 'react-responsive-carousel';

// import memberPhoto from './joyImage/userBlack.png';                     // 會員大頭貼圖片
import { HiThumbUp } from "react-icons/hi";                             // icon 讚
import gameRating_06 from './joyImage/gameRating/gameRating_06.jpg';    // 遊戲分級6歲
import gameRating_12 from './joyImage/gameRating/gameRating_12.jpg';    // 遊戲分級12歲
import gameRating_15 from './joyImage/gameRating/gameRating_15.jpg';    // 遊戲分級15歲
import gameRating_18 from './joyImage/gameRating/gameRating_18.jpg';    // 遊戲分級18歲
import gameRating_all from './joyImage/gameRating/gameRating_all.jpg';  // 遊戲分級全年齡



class GameInfo extends Component {
    state = {
        // memberUser: [{}],           // 會員
        data: [{}],
        photoTest: [{}],            // 遊戲圖片 + 配圖片的文字
        commentTest: [{}],          // 評論區用
        okComment: [{ gameId: "", comment: "" }],
    }

    componentDidMount = async () => {
        // 會員登入
        // let userResult = await Axios.get("http://localhost:8000/member/memberinfo", {
        //     header: authHeader(),
        // });
        // this.state.memberUser = userResult.data;
        // console.log(this.state.memberUser);

        var result = await Axios.get(`http://localhost:8000/GameInfo/${this.props.match.params.gameId}`);
        this.state.data = result.data;
        var result_2 = await Axios.get(`http://localhost:8000/member/${this.state.data.gameId}`);
        this.state.commentTest = result_2.data;
        // console.log(this.state.commentTest);

        // 遊戲圖片 + 配圖片的文字
        var result_3 = await Axios.get(`http://localhost:8000/GamePic/${this.state.data.gameId}`);
        this.state.photoTest = result_3.data;
        document.getElementById('photoA').src = this.state.photoTest[0].gamePhoto;
        document.getElementById('photoB').src = this.state.photoTest[1].gamePhoto;
        document.getElementById('photoC').src = this.state.photoTest[2].gamePhoto;
        document.getElementById('photoTextA').innerText = this.state.photoTest[0].gameImgText;
        document.getElementById('photoTextB').innerText = this.state.photoTest[1].gameImgText;
        document.getElementById('photoTextC').innerText = this.state.photoTest[2].gameImgText;
        this.setState({});

        // 年齡分級判斷
        var ageRating = this.state.data.gameClassIfication;
        if (ageRating === 6) {
            document.getElementById('rating').src = gameRating_06;
        } else if (ageRating === 12) {
            document.getElementById('rating').src = gameRating_12;
        } else if (ageRating === 15) {
            document.getElementById('rating').src = gameRating_15;
        } else if (ageRating === 18) {
            document.getElementById('rating').src = gameRating_18;
        } else {
            document.getElementById('rating').src = gameRating_all;
        }
    }

    okButtonClick = async () => {
        // alert ("2022-12-06");
        console.log(document.getElementById('comment').value);
        console.log(document.getElementById('gameId').value);
        // if (document.getElementById('comment').value !== ""
        // ) {
        this.state.okComment[0].comment = document.getElementById('comment').value;
        this.state.okComment[0].gameId = document.getElementById('gameId').value;
        console.log(this.state.okComment)
        var result = await Axios.post("http://localhost:8000/GameInfoComment", this.state.okComment);
        console.log(result);
        this.setState({})
        //     // window.location = "/GameInfo";
        //     // window.location.reload();
        // } else {
        //     alert("未輸入回覆內容，請確認。")
        // }
    }


    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container" style={{ position: "relative", top: "65px" }}>
                    {/* 索引條 全部遊戲→遊戲分類→遊戲名稱*/}
                    <div className="p-2">
                        <a href="/" style={{ color: "white", fontSize: "14px" }}>所有 遊戲</a> &gt;&nbsp;
                        <a href="/" style={{ color: "white", fontSize: "14px" }}>{this.state.data.gameClass} 遊戲</a> &gt;&nbsp;
                        <span style={{ color: "white", fontSize: "14px" }}>{this.state.data.gameName}</span>
                    </div>
                    {/* 遊戲封面及輪播區 */}
                    {/* 遊戲封面 gamePhotoCover\ */}
                    <div className="row">
                        <div className="col-12 col-md-9 gamePhotoCoverBox p-2">
                            <Carousel
                                autoPlay={true}
                                infiniteLoop={true}
                                thumbWidth={150}
                            >
                                <div>
                                    <img src={this.state.data.gamePhotoA} alt="輪播圖片" />
                                </div>
                                <div>
                                    <img src={this.state.data.gamePhotoB} alt="輪播圖片" />
                                </div>
                                <div>
                                    <img src={this.state.data.gamePhotoC} alt="輪播圖片" />
                                </div>
                                <div>
                                    <img src={this.state.data.gamePhotoD} alt="輪播圖片" />
                                </div>
                                <div>
                                    <img src={this.state.data.gamePhotoE} alt="圖片說明" />
                                </div>
                                <div>
                                    <img src={this.state.data.gamePhotoF} alt="圖片說明" />
                                </div>
                            </Carousel>
                        </div>
                        <div className="col-12 col-md-3 d-flex flex-wrap gameDetail p-2" >
                            {/* 遊戲和商品購買及分類區 gameBuyCard */}
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th colSpan="2">{this.state.data.gameName}</th>
                                        </tr>
                                        <tr>
                                            <th>遊戲分類</th>
                                            <td>{this.state.data.gameClass}</td>
                                        </tr>
                                        <tr>
                                            <th>發行商</th>
                                            <td>{this.state.data.gameDeveloper}</td>
                                        </tr>
                                        <tr>
                                            <th>發行日期</th>
                                            <td>{this.state.data.gameIssueDate}</td>
                                        </tr>
                                        <tr>
                                            <th>綜合評論</th>
                                            <td><HiThumbUp />&nbsp;&nbsp;{this.state.data.gameGood}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <div className="p-2">
                                    <div style={{ width: "80%", height: "80px", overflow: "hidden" }}>
                                        <img id="rating" style={{ width: "80px" }} alt="年齡分級"></img>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h3>NT$ {this.state.data.gamePrice}</h3>
                                    <div className="btn btn-success" onClick={this.gameRating}>
                                        <h5>立即購買</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 遊戲特色及系統規格需求區域 gameInfoA */}
                    <div className="row p-2">
                        <Tabs>
                            {/* tab_1 遊戲描述 gameInfoA_tab1 */}
                            <div label="關於遊戲">
                                <span>{this.state.data.gameText}</span>
                            </div>
                            {/* tab_2 系統規格 gameInfoA_tab2 */}
                            <div label="系統需求">
                                <table className="gameSpec">
                                    <tr>
                                        <th colSpan="2">最低需求</th>
                                        <th colSpan="2">建議需求</th>
                                    </tr>
                                    <tr>
                                        <th>架構</th>
                                        <td>{this.state.data.systemLeast}</td>
                                        <th>架構</th>
                                        <td>{this.state.data.systemNormal}</td>
                                    </tr>
                                    <tr>
                                        <th>作業系統</th>
                                        <td>{this.state.data.systemOsLeast}</td>
                                        <th>作業系統</th>
                                        <td>{this.state.data.systemOsNormal}</td>
                                    </tr>
                                    <tr>
                                        <th>處理器</th>
                                        <td>{this.state.data.cpuLeast}</td>
                                        <th>處理器</th>
                                        <td>{this.state.data.cpuNormal}</td>
                                    </tr>
                                    <tr>
                                        <th>記憶體</th>
                                        <td>{this.state.data.ramLeast}</td>
                                        <th>記憶體</th>
                                        <td>{this.state.data.ramNormal}</td>
                                    </tr>
                                    <tr>
                                        <th>顯示卡</th>
                                        <td>{this.state.data.gpuLeast}</td>
                                        <th>顯示卡</th>
                                        <td>{this.state.data.gpuNormal}</td>
                                    </tr>
                                </table>
                            </div>
                        </Tabs>
                    </div>
                    {/* 遊戲和商品說明的圖片區 */}
                    <div className="row gamePhotoGroup">
                        {/* 第一區，圖片經過hover（順序：左到右） gamePhotoGroupA */}
                        {/* <div className="col-md-12 d-flex gamePhotoGroupA"> */}
                        {/* 第一區的第一張 */}
                        {/* <div className="gamePhotoA">
                                <img src={this.state.data.gamePhotoE} alt="圖片說明" />
                            </div> */}
                        {/* 第一區的第二張  */}
                        {/* <div className="gamePhotoA">
                                <img src={this.state.data.gamePhotoF} alt="圖片說明" />
                            </div> */}
                        {/* 第一區的第三張  */}
                        {/* <div className="gamePhotoA">
                                <img src={this.state.data.gamePhotoG} alt="圖片說明" />
                            </div> */}
                        {/* 第一區的第四張  */}
                        {/* <div className="gamePhotoA">
                                <img src={this.state.data.gamePhotoH} alt="圖片說明" />
                            </div> */}
                        {/* 第一區的第五張  */}
                        {/* <div className="gamePhotoA">
                                <img src={this.state.data.gamePhotoI} alt="圖片說明" />
                            </div> */}
                        {/* </div> */}
                        {/* 第二區，圖片 gamePhotoGroupB */}
                        <div className="row d-flex flex-wrap gamePhotoGroupB">
                            <div className="col-4" >
                                <h5 id="photoTextA"></h5>
                            </div>
                            <div className="col-8">
                                <img id="photoA" alt="遊戲圖片" /><br />
                            </div>
                            <div className="col-8">
                                <img id="photoB" alt="遊戲圖片" />
                            </div>
                            <div className="col-4">
                                <h5 id="photoTextB"></h5>
                            </div>
                            <div className="col-4" >
                                <h5 id="photoTextC"></h5>
                            </div>
                            <div className="col-8">
                                <img id="photoC" alt="遊戲圖片" /><br />
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* 會員評論功能 */}
                    <h3>評論</h3>
                    {this.state.commentTest.map((commentData, index) => {
                        return (
                            <div className="row d-flex flex-wrap m-2" key={index}>
                                <div className="col-3 col-md-2 gameReplyUser">
                                    <img src={commentData.memberPhoto} alt="會員大頭貼" />
                                    <h6 style={{ padding: "10px" }}>{commentData.nickname}</h6>
                                </div>
                                <div className="col-9 col-md-10 gameReplyList">
                                    <div style={{ fontSize: "12px", padding: "10px", textAlign: "right" }}>
                                        <span>{index + 1}樓 ｜ </span>
                                        <span style={{ color: "lightsalmon" }}>{commentData.commentTime}</span><br />
                                    </div>
                                    <span>{commentData.comment}</span>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div id="commentMessage">
                        <div className="row d-flex flex-wrap m-2" >
                            <div className="col-3 col-md-2 gameReplyUser">
                                <img src={memberPhoto} alt="會員大頭貼" />
                                <h6 style={{ padding: "10px" }}>我是周湯好</h6>
                            </div>
                            <div className="col-9 col-md-10 gameReplyList">
                                <div style={{ fontSize: "12px", padding: "10px", textAlign: "right" }}>
                                    <span>1樓 ｜ </span>
                                    <span style={{ color: "lightsalmon" }}>2022-10-24</span><br />
                                </div>
                                <span>
                                    看到馬上購買下載了，先推一個！希望畫面有改善哈哈哈哈哈
                                </span>
                            </div>
                        </div>
                    </div> */}
                    <hr />
                    <div>
                        <form action="" method="post">
                            <input type="hidden" id="gameId" name="gameId" value={this.state.data.gameId} />
                            <input type="hidden" id="commentTime" name="commentTime" />
                            <span>我要評論：</span>
                            <textarea type="text" placeholder="在此輸入更多分享內容" name="comment" id="comment" style={{ borderRadius: "10px", width: "100%", height: "200px" }} />
                            <div className="p-2">
                                <input type="button" onClick={this.okButtonClick} name="okButtonClick" id="okButtonClick" value="送　　出" className="btn btn-sm btn-success" />&nbsp;&nbsp;
                                <input type="reset" value="清除內容" className="btn btn-sm btn-danger" name="clearButton" id="clearButton" />
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment >
        );
    }


}

export default GameInfo;