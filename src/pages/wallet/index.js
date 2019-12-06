import React from "react";
import { WalletContainer } from "./styled"
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Wallet extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
        this.num = localStorage.getItem('total');
    }
    render() {
        let { shoplist,count,countPrice } = this.props
        return (
            <WalletContainer>
                <div className="head">
                    <Link to="/home">
                        <i className="iconfont">{'\ue603'}</i>
                    </Link>
                    <p>我的票夹</p>
                    <i className="iconfont">{'\ue639'}</i>
                </div>

                <div className="wallet">
                    <ul>
                        {
                            shoplist.map((item, index) => (
                                <li key={index}>
                                    <div className="info">
                                        <div className="info_c">
                                            <div className="show_time">
                                                <p>{item.name}</p>
                                                <p>{item.time}</p>
                                                <p>{item.city} | {item.add}</p>
                                            </div>
                                            <div className="show_pit">
                                                <img src={item.pit} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info_p">
                                        <div className="price">
                                            ￥<span ref="price">{item.price}</span>
                                            <span>|</span>
                                            <span>{item.num}张</span>
                                        </div>
                                        <div className="subit">
                                            <div className="push" onClick={this.props.handlepush.bind(this, index)}>+</div>
                                            <input type="text" className="inp" value={item.num} onChange={this.props.handleInput.bind(this, index)} />
                                            <div className="reduce" onClick={this.props.handlereduce.bind(this, index)}>-</div>
                                        </div>
                                        <div className="dell" onClick={this.props.handleDel.bind(this, index)}>
                                            删除
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="intall">
                                            <div className="inspice">
                                                <p>总共</p>
                                                <p>￥{countPrice}</p>
                                            </div>
                                            <div className="store">
                                                <span>共{count===0?this.num:count}件商品</span>
                                            </div>
                                        </div>
                                        <div className="tall">
                                            结算
                                        </div>
                                    </div>
                                </li>
                            ))

                        }
                    </ul>
                </div>


            </WalletContainer>
        )
    }
   
}

export default Wallet;