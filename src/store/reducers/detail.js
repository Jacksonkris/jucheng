import {handleActions} from "redux-actions";
import {Detail,push,reduce,deletel,cartPush} from "actions/detail/actionsTypes"
const defaultState = {
    detail:[],
    goodlist:[],
    shoplist:[],
    count:0,
    countPrice:0
}

export default handleActions({
    [Detail]:(state,action)=>{
        let detailState = JSON.parse(JSON.stringify(state));
        detailState.detail.push(action.payload.data.data.static_data);
        if(detailState.detail.length>1){
            detailState.detail.splice(0,1)
        }
        return detailState
    },
    [push]:(state,action)=>{
        let pushState = JSON.parse(JSON.stringify(state));
        pushState.shoplist = JSON.parse(localStorage.getItem('goodlist'))
        pushState.shoplist[action.index].num++
        pushState.count = Number(localStorage.getItem('total'))
        pushState.count += 1
        pushState.countPrice = Number(localStorage.getItem('countPrice'))
        pushState.countPrice += Number(pushState.shoplist[action.index].price)
        localStorage.setItem('countPrice',pushState.countPrice)
        localStorage.setItem('total',pushState.count)
        localStorage.setItem('goodlist',JSON.stringify(pushState.shoplist))
        return pushState
    },
    [reduce]:(state,action)=>{
        let reduceState = JSON.parse(JSON.stringify(state));
        reduceState.shoplist = JSON.parse(localStorage.getItem('goodlist'))
        reduceState.count = localStorage.getItem("total")
        
        reduceState.countPrice = Number(localStorage.getItem('countPrice'))
        if(reduceState.shoplist[action.index].num >1){
            reduceState.count -= 1
            reduceState.countPrice -= Number(reduceState.shoplist[action.index].price)
        }
       
        localStorage.setItem('countPrice',reduceState.countPrice)
        localStorage.setItem("total", reduceState.count)
        if(reduceState.shoplist[action.index].num <= 1){
            reduceState.shoplist[action.index].num = 1
        }else{
            reduceState.shoplist[action.index].num--
        }
        localStorage.setItem('goodlist',JSON.stringify(reduceState.shoplist))
        return reduceState
    },
    [deletel]:(state,action)=>{
        let deletelState = JSON.parse(JSON.stringify(state));
        deletelState.shoplist = JSON.parse(localStorage.getItem('goodlist'))
        
        deletelState.count = localStorage.getItem('total')
        deletelState.count -= deletelState.shoplist[action.index].num
        deletelState.countPrice = localStorage.getItem('countPrice')
        deletelState.countPrice -= (deletelState.shoplist[action.index].num*deletelState.shoplist[action.index].price)
        localStorage.setItem('countPrice',deletelState.countPrice)
        deletelState.shoplist.splice([action.index],1)
        localStorage.setItem('total', deletelState.count)
        localStorage.setItem('goodlist',JSON.stringify(deletelState.shoplist))
        return deletelState
    },
    [cartPush]:(state,action)=>{
        let cartPush = JSON.parse(JSON.stringify(state));
        cartPush.shoplist = JSON.parse(localStorage.getItem('goodlist'))
        
        cartPush.count = Number(localStorage.getItem('total'))
        cartPush.count += 1
        if(! cartPush.shoplist){
            cartPush.shoplist = []
        }
        
        localStorage.setItem('total',cartPush.count)
        cartPush.countPrice = Number(localStorage.getItem('countPrice'))
        // cartPush.shoplist.push(action.info)
        var has = 0;
          var index = "";
          for(var i=0;i<cartPush.shoplist.length;i++){
              if(action.info.id == cartPush.shoplist[i].id){
                  has = 1;
                  index = i;
                  break;
              }
          }
          if(has==0){
             cartPush.shoplist.push(action.info)
             cartPush.countPrice += Number(action.info.price)
          }
          else{
            cartPush.shoplist[index].num += 1
            cartPush.countPrice += Number(action.info.price)
          }
          localStorage.setItem('countPrice',cartPush.countPrice)
        localStorage.setItem("goodlist",JSON.stringify(cartPush.shoplist))
        return cartPush
    }
},defaultState)
