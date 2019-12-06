import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { GoodContainer } from "./styled"
import { Link,withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { Carousel, WingBlank } from 'antd-mobile';
import BscrollCom from "common/bscroll"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)


@withRouter
class Home extends Component {
    constructor(props){
        super(props);
        this.page=0;
    }
    render() {
        let { classifyHome, hotblock, bannerpit, tourshow, theatre, showlist } = this.props;
        return (
            <PageContainer>
                <GoodContainer id="home">
                    <div className="header">
                        <div className="head_address">
                            <span className="iconfont addicon">&#xe63e;</span>
                            <p className="city">全国</p>
                        </div>

                        <Link to="/search" className="head-search">
                            <span className="iconfont">&#xe60e;</span>
                            <span>搜索热门演出</span>
                        </Link>

                        <div className="head-calendar">
                            <span className="iconfont">&#xe6ff;</span>
                        </div>
                    </div>
                    <main>
                        <WingBlank>
                            <Carousel className="banner_pit"
                                autoplay={false}
                                infinite={true}
                                autoplay={true}
                            >
                                {bannerpit.map((item, index) => (
                                    <img key={index}
                                        src={item.image_url}
                                        alt=""
                                        onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                        }}
                                    />
                                ))}
                            </Carousel>
                        </WingBlank>

                        <section className="advertion-wrap">

                            <ul className="label-item">
                                {
                                    classifyHome.map((item,index) => (
                                        <li key={index} onClick={this.handleTo.bind(this,item)}>
                                                <img src={item.pic} alt="" />
                                                <span>{item.name}</span>
                                            
                                            
                                        </li>

                                    ))
                                }
                            </ul>
                        </section>

                        <section className="hot-block">
                            <div className="hot-block__lab">
                                <h3>热门演出</h3>

                                <span className="iconfont">&#xe60d;</span>

                            </div>

                            <ul className="hot-block__list">
                                {
                                    hotblock.map((item, index) => (
                                        <li key={index}>
                                            <img src={item.pic} alt="" />
                                            <h3>
                                                {item.show_name}
                                            </h3>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>

                        <section className="tour-block">
                            <div className="hot-block__lab">
                                <h3>循回演出</h3>
                                <span className="iconfont">&#xe60d;</span>
                            </div>

                            <ul className="tour-block__list">
                                <li>
                                    <img src="https://image.juooo.com//group1/M00/03/20/rAoKmV2Rmc6AIA1JAADJKJAo-CU624.jpg" alt="" />
                                    <h3>
                                        百老汇摇滚音乐剧《吉屋出租RENT》中文版
                                </h3>
                                    <p>28场巡演</p>
                                </li>
                            </ul>
                        </section>

                        <div className="sing_list">
                            {
                                tourshow.map((item, index) => (
                                    <section className="category-block_list" key={index}>
                                        <div className="hot-block_lab">
                                            <h3>{item.title}</h3>
                                            <span className="iconfont">&#xe60d;</span>
                                        </div>
                                        <div className="category-block_list_wrap">
                                            <div className="row_bg">
                                                <img src={item.list[0].pic} alt="" />
                                                <div className="row_info">
                                                    <p className="yc_data">
                                                        <span>{item.list[0].display_show_time}</span>
                                                    </p>
                                                    <h3 className="text-double">
                                                        {item.list[0].schedular_name}
                                                    </h3>
                                                    <p className="yc_add">
                                                        {item.list[0].city_name} | {item.list[0].venue_name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list_column">
                                            <ul>
                                                {
                                                    item.list.map((child, indexs) => (

                                                        <li key={indexs} onClick={this.handleDetils.bind(this,child)}>
                                                            <img src={child.pic} alt="" />
                                                            <h3>
                                                                {child.schedular_name}
                                                            </h3>
                                                            <p>
                                                                <strong>￥{child.low_price}</strong>
                                                                <span>起</span>
                                                            </p>
                                                        </li>

                                                    ))

                                                }
                                            </ul>
                                        </div>
                                    </section>
                                ))
                            }

                        </div>


                        <section className="hot-venue">
                            <div className="hot-venue_wrap">
                                <h3>热门场馆</h3>
                                <span className="iconfont">&#xe60d;</span>
                            </div>

                            <div className="hot-venue_block">
                                <ul>
                                    {
                                        theatre.map((item, index) => (
                                            <li key={index}>
                                                <div className="block_info">
                                                    <img src={item.pic} alt="" />
                                                    <div className="info_con">
                                                        <h3>{item.name}</h3>
                                                        <p>{item.count}场在售演出</p>
                                                    </div>
                                                    <span className="iconfont">&#xe639;</span>
                                                </div>
                                                <div className="theater-show">
                                                    {
                                                        item.showList.map((child, indexs) => (
                                                            <div className="Show" key={indexs}>
                                                                <div className="show-data">{child.show_time}
                                                                    <span></span>
                                                                </div>
                                                                <div className="show-pic">
                                                                    <img src={child.pic} alt="" />
                                                                </div>
                                                            </div>
                                                        ))

                                                    }
                                                </div>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </section>
                        <BscrollCom ref="scroll">
                            <section className="recommend-block">
                                <div className="recommend-block_wrap ">
                                    <h3>为你推荐</h3>
                                </div>

                                <div className="recommend-block_list">
                                    {
                                        showlist.map((item, index) => (
                                            <div className="recommend-list" key={index} onClick={this.handleDetilslist.bind(this,item)}>
                                                <img src={item.pic} alt="" />
                                                <div className="schedule-cell_info">
                                                    <div className="data_week">
                                                        <span className="week_data">{item.start_show_time}</span>

                                                    </div>
                                                    <div className="week_title">
                                                        {item.name}
                                                    </div>
                                                    <div className="week_space">
                                                        {item.city_name} | {item.venue_name}
                                                    </div>
                                                    <div className="week_price">
                                                        <span>￥{item.min_price}</span>
                                                        <span>起</span>
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                    }


                                </div>

                            </section>
                        </BscrollCom>
                    </main>
                </GoodContainer>
            </PageContainer>
        )
    }
    handleTo(item){
        this.props.history.push("/singer/"+item.category_id)
        // console.log(this.props)
    }
    handleDetils(child){
        this.props.history.push("/details/"+child.sche_id)
    }
    handleDetilslist(item){
        this.props.history.push("/details/"+item.schedular_id)
    }
    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp();
    }
    componentDidMount() {
        this.props.handleAsynckHome();
        this.props.handleAsynckHot();
        this.props.handleAsynckBanner();
        this.props.handleAsynckTour();
        this.props.handleAsynckTheatre();
        this.handleAsyncData()
        this.refs.scroll.handlepullingUp(()=>{
            this.handleAsyncData();
        })
        setTimeout(() => {

            this.setState({
                data: [],
            });
        }, 100);
    }
    handleAsyncData(){
        this.props.handleAsynckShowList(this.page);
        this.page++;
    }
}


export default Home