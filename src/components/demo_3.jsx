import React, { Component } from 'react';
import Webcam from "react-webcam";

class Demo_3 extends Component {
    state = {}

    WebcamComponent = () => <Webcam />;

    render() {
        return (
            <React.Fragment>

                {/* <div className="parallax">
                    <div className="bg1">foo</div>
                    <div className="bg2">bar</div>
                    <div className="bg3">baz</div>
                    <div className="bg4">bazz</div>
                </div> */}
                {/* <h1>Demo Video</h1> */}
                <div>
                    <Webcam
                        audio = { false } 
                        height = { 400 } 
                        screenshotFormat = "image/jpeg" 
                        width = { 600 } 
                    />
                </div>

            </React.Fragment>


        );
    }
}

export default Demo_3;