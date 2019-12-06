import React from "react";
import { SearchContainer } from "./styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            inputVal: '',
        }
    }
    render() {
        let { inputVal } = this.state;
        let { search } = this.props;
        return (
            <SearchContainer>
                <div>
                    <header>
                        <div className="head_search">
                            <i className="iconfont">{'\ue60e'}</i>
                            <input onChange={this.handleChange.bind(this)}
                                placeholder="搜索热门演出" value={inputVal} />
                            <span onClick={this.handleClear.bind(this)} className="iconfont">&#xe616;</span>
                        </div>
                        <span onClick={this.handleEsc.bind(this)}>取消</span>
                    </header>
                    <section>
                        <div className="hot"
                            style={{ display: inputVal === '' ? 'block' : 'none' }}>
                            <h3>热门搜索</h3>
                            <ul>
                                <li>猫CATS</li>
                                <li>三体2</li>
                                <li>来自远方</li>
                                <li>弗洛朗·莫特</li>
                                <li>冰雪奇缘</li>
                                <li>芝加哥</li>
                            </ul>
                        </div>

                        <div style={{ display: inputVal !== '' ? 'block' : 'none' }}
                            className="list">
                            <ul>
                                {
                                    search.map((item, index) => (
                                        <li key={index} onClick={this.handleDetils.bind(this,item)}>
                                            <img src={item.pic} alt="" />
                                            <div className="list_desc">
                                                <p>
                                                    <b>{item.end_show_time}</b>
                                        <></>
                                                </p>
                                                <div className="itname">
                                                        <p dangerouslySetInnerHTML={{ __html: item.name}}></p>
                                                </div>
                                                <p>{item.city_name} | {item.venue_name}</p>
                                                <p>
                                                    <i className='c_ff6'>￥{item.min_price}</i> 起
                                    </p>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>
                            <p className="no-more">没有更多了</p>
                        </div>
                    </section>
                </div>
            </SearchContainer>
        )
    }
    handleEsc() {
        this.props.history.push("/home");
    }
    handleChange(e) {
        let key = e.target.value;
        this.setState({
            inputVal: key,
        })
        this.props.handleAsyncSearch(key);
    }
    handleClear() {
        this.setState({
            inputVal: '',
        })
    }
    handleDetils(item){
        this.props.history.push("/details/"+item.schedular_id)
    }
    componentDidMount() {

    }
}

export default Search;