import React, { Component } from 'react';
// import Axios from 'axios';                              // 串連 NodeJS
// import LiveShow from "./demo_3";                        // 視訊鏡頭
import NavBar from "./NavBar";                          // 導欄列

import videoBG from './joyVideo/beach.mp4';                   // 最上面的實況影片
import LiveHost_1 from './joyImage/background/LiveStreamShow_01.png';     // 統神
import LiveHost_2 from './joyImage/background/LiveStreamShow_02.png';     // 貝莉莓
import LiveStreamBG from './joyImage/background/LiveStreamShow_03.png';     // 實況日曆圖


class LiveStream extends Component {

    state = {
        // data: [{}]
    }

    // componentDidMount = async () => {
    //     var result = await Axios.get("http://localhost:8000/");
    //     this.state.data = result.data;
    //     this.setState({})
    //     console.log(result);
    // }

    streamclick = () => {
        // alert("2022-12-10")
        window.location = "/LiveStream/LiveShow";
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container" style={{ position: "relative", top: "65px" }}>
                    <div className='row'>
                        <div className="d-flex flex-wrap" style={{ backgroundColor: "rgba(88, 88, 88, 0.3)" }}>
                            <div className="col-12 col-lg-8 p-2 liveOnShow">
                                <video src={videoBG} autoPlay muted controls width="100%" height="100%"></video>
                            </div>
                            <div className="col-12 col-lg-4 p-2 liveScrollbar" >
                                <h5 style={{ textAlign: "center" }}>播放列表</h5>
                                <div className="d-flex flex-wrap p-2 " onClick={this.streamclick}>
                                    <div className="col-5 liveOnShowItem">
                                        <img src="https://dummyimage.com/500x300/006fff/ffffff&text=Coming++Soon" alt="" />
                                    </div>
                                    <div className="col-7 p-2">
                                        <span className="liveOnTitle">目前沒有直播可觀賞</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap p-2  ">
                                    <div className="col-5 liveOnShowItem">
                                        <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021410820148/liveHost01_2.png" alt="實況影片縮圖" />
                                    </div>
                                    <div className="col-7 p-2">
                                        <span className="liveOnTitle">【統神】</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap p-2 ">
                                    <div className="col-5 liveOnShowItem">
                                        <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021008150528/liveHost01_1.png" alt="實況影片縮圖" />
                                    </div>
                                    <div className="col-7 p-2">
                                        <span className="liveOnTitle">【統神】嘉航被預示者撞到卡在樹裡</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap p-2  ">
                                    <div className="col-5 liveOnShowItem">
                                        <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021826048050/liveHost01_3.png" alt="實況影片縮圖" />
                                    </div>
                                    <div className="col-7 p-2">
                                        <span className="liveOnTitle">【統神】</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap p-2  ">
                                    <div className="col-5 liveOnShowItem">
                                        <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465022346149980/liveHost01_4.png" alt="實況影片縮圖" />
                                    </div>
                                    <div className="col-7 p-2">
                                        <span className="liveOnTitle">【統神】</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap p-2  ">
                                    <div className="col-5 liveOnShowItem">
                                        <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465022685880350/liveHost01_5.png" alt="實況影片縮圖" />
                                    </div>
                                    <div className="col-7 p-2">
                                        <span className="liveOnTitle">【統神】</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="col-12 homeLiveStreamArea">
                        <h2 style={{ textAlign: "center" }}>十 二 月 實 況 活 動</h2>
                        <img src={LiveStreamBG} alt="" className="homeLiveStream" />
                        <img src={LiveHost_1} alt="" className="homeLiveHost_1" />
                        <img src={LiveHost_2} alt="" className="homeLiveHost_2" />
                    </div>
                    <hr />
                    <div className="p-3 liveVideoGroup">
                        <h2>更多實況影片</h2>
                        <h4 style={{ textAlign: "left" }}>❤❤ 貝 莉 莓 ❤❤</h4>
                        <div className="d-flex flex-wrap">
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464942369153044/liveHost02_4.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【貝莉莓】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464942746632252/liveHost02_5.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【貝莉莓】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464943132512336/liveHost02_6.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【貝莉莓】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464941299605564/liveHost02_1.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【貝莉莓】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464941635141743/liveHost02_2.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【貝莉莓】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054464942033604709/liveHost02_3.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【貝莉莓】</span>
                            </div>
                        </div>
                        <br />
                        <h4 style={{ textAlign: "left" }}>❂❂ 統 神 ❂❂</h4>
                        <div className="d-flex flex-wrap">
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465022346149980/liveHost01_4.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【統神】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465022685880350/liveHost01_5.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【統神】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465023054970991/liveHost01_6.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【統神】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021008150528/liveHost01_1.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【統神】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021410820148/liveHost01_2.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【統神】</span>
                            </div>
                            <div className="col-4 liveCase">
                                <img src="https://cdn.discordapp.com/attachments/1054405459672571928/1054465021826048050/liveHost01_3.png" alt="實況影片縮圖" />
                                <span className="liveVideoTitle">【統神】</span>
                            </div>
                        </div>
                    </div>
                </div>

            </ React.Fragment >
        );
    }
}

export default LiveStream;