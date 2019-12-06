import React from "react";
import {LoginContainer} from "./styled"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
import Cookies from "js-cookie";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import { Toast} from 'antd-mobile';
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Login extends React.Component{
    constructor(){
        super();

        this.state={
            status:true,
            username:'',
            password:''
        }
    }

    render(){
        let {status,username,password} = this.state;
        return (
            <LoginContainer>
            <div>
                <span className="iconfont" onClick={this.handleBack.bind(this)}>{'\ue603'}</span>
                <div className="main" 
                style={{display:status === true?'block':'none'}}>
                    <h1>欢迎来到聚橙网</h1>
                    <input type="text" placeholder="请输入手机号/邮箱" value={username}  
                    onChange={this.handleChange.bind(this,1)}/>
                    <input type="password" placeholder="请输入密码" value={password} 
                    onChange={this.handleChange.bind(this,2)}/>

                    <p onClick={this.handleLogin.bind(this)}
                    className={(username && password) !=='' ?'click':''}>登陆</p>
                    <div className="toggle">
                        <span>忘记密码</span>
                        <span onClick={this.handleMove.bind(this)}>注册</span>
                    </div>
                </div>
                <div className="main"
                style={{display:status === false?'block':'none'}}>
                    <h1>欢迎来到聚橙网</h1>
                    <input type="text" placeholder="请输入手机号/邮箱"/>
                    <input type="password" placeholder="请输入密码"/>
                    <p onClick={this.handleRegister.bind(this)}
                    className={(username && password) !=='' ?'click':''}>注册</p>
                    <div className="toggle">
                        <span>忘记密码</span>
                        <span onClick={this.handleMove.bind(this)}>密码登陆</span>
                    </div>
                </div>
                <div className="footer">
                    <div className="item-title">
                        <span></span>
                        <span>其他登陆方式</span>
                        <span></span>
                    </div>
                    <div className="item-inner">
                        <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/qq.png" alt=""/>
                        <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/weibo.png" alt=""/>
                    </div>
                </div>
            </div>
            </LoginContainer>
        )
    }
    showToast() {
        Toast.info('This is a toast tips !!!', 1);
      }
    handleLogin(){
        let {username,password} = this.state;
        console.log(username,password)
        if(username && password){
            this.props.handleAsyncLogin(username,password);
            
            setTimeout(()=>{
                let {users} = this.props;
                console.log(users);
                if(Cookies.get("token")){
                    Cookies.set("id",users.data._id)
                    Cookies.set("urlPic",users.data.urlPic)
                    Cookies.set("name",users.data.name);
                    Toast.info(users.info)
                    this.props.history.push("/mine")
                }else{
                    Toast.info(users.info);
                }
            },500)
                

        }
    }
    handleRegister(){
        let {username,password} = this.state;
        console.log(username,password)
        if(username&&password){
            this.props.handleAsyncRegister(username,password)
        }
    }
    handleMove(){
        this.setState({
            status: !this.state.status
        })
    }
    handleChange(info,e){
        switch(info){
        case 1:
            let users = e.target.value;
                this.setState({
                    username :users
                })
            break;
        case 2:
            let pwd = e.target.value;
            this.setState({
                password :pwd
            })
            break;
        }
    }
    handleBack(){
        this.props.history.goBack()
    }

}

export default Login;