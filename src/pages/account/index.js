
import React from "react";
import Cookies from "js-cookie";
import {AccountContainer} from "./styled";
import {withRouter} from "react-router-dom"
@withRouter
class Account extends React.Component{
    render(){
        return (
            <AccountContainer>
                <div>
                    <div className="head">
                        <i className="iconfont">{'\ue603'}</i>
                        <p>账户设置</p>
                        <i onClick={this.handleMould.bind(this)} 
                        className="iconfont">{'\ue639'}</i>
                    </div>
                    <div className="gird1">
                        <div className="gird-title1">
                            <span>头像</span>
                            <img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt=""/>
                        </div>
                        <div className="gird-title2">
                            <span>昵称</span>
                        </div>
                    </div>
                    <div className="gird2">
                        <div className="gird-title">
                            <span>昵称</span>
                            <span></span>
                        </div>
                        <div className="gird-title">
                            <span>邮箱</span>
                        </div>
                        <div className="gird-title">
                            <span>生日信息 （只允许设置一次）</span>
                            <span className="iconfont">去完善{'\ue60d'}</span>
                        </div>
                        <div className="gird-title">
                            <span>登陆密码</span>
                            <span className="iconfont">修改{'\ue60d'}</span>
                        </div>
                        <div className="gird-title">
                            <span>支付密码</span>
                            <span className="iconfont">设置{'\ue60d'}</span>
                        </div>
                        <div className="gird-title">
                            <span>实名认证</span>
                            <span className="iconfont">未认证{'\ue60d'}</span>
                        </div>
                        <div className="gird-title">
                            <span>用户协议</span>
                            <span className="iconfont">用户协议{'\ue60d'}</span>
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <p onClick={this.handlereword.bind(this)}>退出登陆</p>
                    </div>
               
                </div>
            </AccountContainer>
        )
    }
    handleMould(){
        
    }
    handlereword(){
        // console.log(111)
        // console.log(Cookies)
        Cookies.remove("token");
        Cookies.remove("id");
        Cookies.remove("urlPic");
        Cookies.remove("name");
        this.props.history.push("/login")
    }
}

export default withRouter(Account);