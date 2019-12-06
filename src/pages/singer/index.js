import React from "react";
import { ClassifyContainer } from "./styled"
import { connect } from "react-redux";
import SingerList from "pages/singerList"
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Classify extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
    }
    render() {
        // let { activeIndex } = this.state;
        let { catelist,activeIndex } = this.props
        return (
            <ClassifyContainer>
                <div>
                    <div className="head">
                        <i className="iconfont" onClick={this.handleback.bind(this)}>{'\ue603'}</i>
                        <p>演出</p>
                        <i className="iconfont">{'\ue639'}</i>
                    </div>
                    <div className="nav">
                        <ul>
                            {
                                catelist.map((item, index) => (
                                    <li className={activeIndex === item.category_id ? 'click' : ''}
                                        onClick={this.props.handleClick.bind(this, item)}
                                        key={item.category_id}>{item.name}</li>
                                ))
                            }
                        </ul>
                        <div className="city">
                            <span>北京</span>
                            <i className="iconfont">{'\ue63e'}</i>
                        </div>
                    </div>
                   <SingerList/>
                </div>
            </ClassifyContainer>
        )
    }
    handleback(){
        this.props.history.push("/home")
    }
   
    componentDidMount() {
        this.props.handleAsyncCateList()
        
    }
}

export default Classify;