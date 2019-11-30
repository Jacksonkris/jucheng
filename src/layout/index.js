import React, { Component,Fragment} from 'react'
import TabBar from "components/tabBar/index"
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
                {/* 内容区 */}
                <TabBar path={this.props.path}/>
            </Fragment>
        )
    }
}
