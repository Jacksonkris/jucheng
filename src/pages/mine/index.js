import React from "react";
import {withRouter} from "react-router-dom"
import {MineContainer} from "./styled"
class Mine extends React.Component{
    render(){
        return (
            <MineContainer>
            <div>
                <div className="info">
                    <span onClick={this.handleFit.bind(this)}
                    className="iconfont">{'\ue632'}</span>
                    <div className="info-main">
                        <div className="mine-info_head">
                            <img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt=""/>
                            <div className="users">
                                <b>橙子</b>
                                <span>ID：6882348</span>
                            </div>
                        </div>
                        <div className="mine-info_label">
                            <span>普通会员</span>
                        </div>
                        <ul className="mine-info_cnt">
                            <li>
                                <i>0</i>
                                <span>账户余额</span>
                            </li>
                            <li>
                                <i>6</i>
                                <span>积分</span>
                            </li>
                            <li>
                                <i>0</i>
                                <span>优惠卷</span>
                            </li>
                            <li>
                                <span>立即开通</span>
                                <span>橙PLUS卡</span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="mine-vip">
                    <img src="https://m.juooo.com/static/img/ad.411f5e6.png" alt=""/>    
                </div>
                <div className="mine-setting">
                    <ul className="setting-list">
                        <li>
                            <i className="iconfont">{'\ue617'}</i>
                            <span>我的订单</span>
                        </li>
                        <li>
                            <i className="iconfont">{'\ue647'}</i>
                            <span>我的票夹</span>
                        </li>
                        <li>
                            <i className="iconfont">{'\ue69e'}</i>
                            <span>我的卡包</span>
                        </li>
                    </ul>
                    <ul className="setting-list">
                        <li>
                            <i className="iconfont">{'\ue6ff'}</i>
                            <span>实名购票人</span>
                        </li>
                        <li>
                            <i className="iconfont">{'\ue61d'}</i>
                            <span>收货地址</span>
                        </li>
                        <li>
                            <i className="iconfont">{'\ue63b'}</i>
                            <span>意见反馈</span>
                        </li>
                        <li>
                            <i className="iconfont">{'\ue604'}</i>
                            <span>客服帮助</span>
                        </li>
                    </ul>
                </div>
            </div>
            </MineContainer>
        )
    }
    handleFit(){
        this.props.history.push("/account");
    }
}

export default withRouter(Mine);