import React from "react";
import img from '../images/crypto.jpg';
import './welcome.css';

function Welcome(){
    return (
        <div className="page">
            <div className="nav">
                <h1>Crypto Currency</h1>
                <div className="atag">
                    <a className="a" href="/home">coins</a>
                    <a className="a" href="#">About</a>
                </div>
            </div>
            <div className="pimg">
                <div>
                    <p style={{fontSize:"50px",marginBottom:"0"}}>Build wealth</p>
                    <p style={{fontSize:"50px",marginTop:"0"}}>on buying Crypto</p>
                </div>
                <img src={img} alt="crypto" style={{width:"750px",height:"500px",borderRadius:"10px"}}/>
            </div>
        </div>
    )
}
export default Welcome;