import React from "react";
import { ClassifyContainer2 } from "./styled"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class SingerList extends React.Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
        };
    }
    render() {
        let { singlist } = this.props;
        return (
            <ClassifyContainer2>
                <div>
                    <div className="list">
                        <ul>
                            {
                                singlist.map((item, index) => (
                                    <li key={index} onClick={this.handleDetail.bind(this,item)}>
                                        <img src={item.pic} alt="" />
                                        <div className="list_desc">
                                            <p>
                                                <b>{item.end_show_time}</b>
                                        
                                            </p>
                                            <p>{item.name}</p>
                                            <p>{item.city_name} | {item.venue_name}</p>
                                            <p>
                                                <i className='c_ff6'>￥{item.min_price}</i> 起
                                             </p>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </ClassifyContainer2>
        )
    }
    handleDetail(item){
        this.props.history.push("/details/"+item.schedular_id)
    }
    componentDidUpdate(preProps){
        // console.log(preProps.activeIndex)
        // console.log(this.props.activeIndex)
        if(preProps.activeIndex !== this.props.activeIndex){
            this.props.handleAsyncSingList(this.props.activeIndex, 1)
        }
    }
    componentDidMount() {
        this.handleAsyncList()
    }
    handleAsyncList(){
        // console.log(this.props)
        let {id} = this.props.match.params
        this.props.handleAsyncSingList(id, 1)
    }
}

export default SingerList;