import React from "react";

import { TheaterContainer } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class Theater extends React.Component {
    render() {
        let { thealist } = this.props
        return (
            <TheaterContainer>
                <div>
                    <h2>剧院</h2>
                    <div className="theaterList">
                        <ul className="showlist">
                            {
                                thealist.map((item, index) => (
                                    <li className="List" key={index}>
                                        <div className="theater-info">
                                            <img src={item.pic} alt="" />
                                            <div>
                                                <p>{item.name}</p>
                                                <span>{item.count}场在售演出</span>
                                            </div>
                                            <i>···</i>
                                        </div>
                                        <div className="theater-show">
                                            {
                                                item.showList.map((child, indexs) => (
                                                    <div className="Show" key={indexs} onClick={this.handleDetail.bind(this,child)}>
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
                </div>
            </TheaterContainer>
        )
    }
    componentDidMount() {
        this.props.handleAsynckTheaList()
    }
    handleDetail(child){
        this.props.history.push("/details/"+child.id)
    }
}

export default Theater;