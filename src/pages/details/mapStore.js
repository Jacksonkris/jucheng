import {detailAsyncAction,cartPuchAsyncAction} from "actions/detail/actionCreator"
import { Toast} from 'antd-mobile';

export const mapStateToProps = (state)=>({
    detail:state.det.detail,
    goodlist:state.det.goodlist,
   
})

export const mapDispatchToProps = (dispatch)=>({
    handleAsynckDetail(id){
        dispatch(detailAsyncAction(id))
    },
    showToast() {
        Toast.info('This is a toast tips !!!', 1);
    },
    handlepush(item) {
        let info ={
            name:item.show_name,
            price:item.low_price,
            time:item.show_time_data.show_time_end_display,
            pit:item.pic,
            city:item.city.city_name,
            add:item.venue.venue_name,
            num:1,
            id:item.schedular_id
        }
          
        // this.props.goodlist.push(info)
        Toast.info("加入成功",1);
        dispatch(cartPuchAsyncAction(info))
        // localStorage.setItem("goodlist",JSON.stringify(this.props.goodlist))
    }
})