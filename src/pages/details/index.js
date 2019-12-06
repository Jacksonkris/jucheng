import React from "react";
import { DetailsContainer } from "./styled"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Details extends React.Component {
    constructor() {
        super();
    }
    render() {
        let { detail } = this.props;
        return (
            <DetailsContainer>
                <div>
                    {
                        detail.map((item, index) => (
                            <div className="detail-brief" key={index}>
                                <div className="brief_primary">
                                    <div className="Mask"></div>
                                    <img className="pic-bg"
                                        src={item.pic} alt="" />
                                    <div className="fg_title">
                                        <i className="iconfont" onClick={this.handleBack.bind(this)}>{'\ue603'}</i>
                                        <p>演出详情</p>
                                        <i className="iconfont">{'\ue63a'}</i>
                                        <i className="iconfont">{'\ue641'}</i>
                                    </div>
                                    <div className="fg_content">
                                        <img className="pic"
                                            src={item.pic} alt="" />
                                        <div className="Rcontent">
                                            <p>{item.show_name}</p>
                                            <p>￥{item.price_range}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="brief_secondary">
                                    <div className="showTime">
                                        {item.show_time_data.show_time_end_display}
                                        <i className="iconfont">{'\ue60d'}</i>
                                    </div>
                                    <p>{item.city.city_name}| {item.venue.venue_name}</p>
                                    <span>{item.venue.venue_address}</span>
                                    <i className="iconfont location">{'\ue63e'}</i>
                                </div>
                                <div className="center_right">
                                    <div className="out">
                                        <div className="plus_tip">
                                            <span>橙PLUS卡</span>
                                            <span>开通送￥100</span>
                                            <span>最高省80元</span>
                                            <span>立即开卡</span>
                                            <i className="iconfont">{'\ue60d'}</i>
                                        </div>
                                    </div>
                                    <div className="benefit">
                                        <div className="gird-title">
                                            <span>VIP+：</span>
                                            <p>V+会员享 <b>国内包邮 + 双倍积分</b></p>
                                            <i className="iconfont">{'\ue60d'}</i>
                                        </div>
                                        <div className="gird-title">
                                            <span>入 场：</span>
                                            <p>1.2米以上凭成人票入场，1.2米以下谢绝入场</p>
                                        </div>
                                        <div className="gird-title">
                                            <span>支 持：</span>
                                            <p>同城满200免邮</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="foot">
                                    <Link to="/wallet" className="find">
                                        <div className="find">
                                            查看票夹
                                        </div>
                                    </Link>

                                    <div onClick={this.props.handlepush.bind(this,item)}>
                                        加入票夹
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </DetailsContainer>
        )
    }
    componentDidMount() {
        this.handleDetail();
    }
    handleDetail() {
        let { id } = this.props.match.params
        this.props.handleAsynckDetail(id)
    }
    handleBack() {
        this.props.history.push("/home")
    }
    
}

export default Details;