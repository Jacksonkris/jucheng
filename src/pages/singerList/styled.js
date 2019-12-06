import styled from "styled-components";


export const ClassifyContainer2 = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#f6f6f6;
    margin-top:0.74rem;
    overflow:auto;
    .list{
        width:100%;
        min-height:100%;
        background:#fff;
        padding:.09rem .12rem;
        font-size:.13rem;
    }
    .list ul{
        width:100%;
        min-height:0;
        
        li{
            width:100%;
            height:1.25rem;
            margin-bottom:.256rem;
        }
    }
    .list ul li{
        display:flex;
        justify-content:space-between;
        img{
            width:.9rem;
            height:1.25rem;
        }
        .list_desc{
            width:1.9rem;
            height:100%;
            padding-top:0.05rem;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
        }
    }
    .list_desc p:nth-child(1){
        height:.17rem;
        b{
            font-size:0.11rem;
            font-weight:600;
        }
    }
    .list_desc p:nth-child(2){
        height:.42rem;
        line-height:.21rem;
        font-size:.135rem;
        font-weight:600;
        overflow:hidden;
        .c_ff6{
            color:#ff6743;
        }
    }
    .list_desc p:nth-child(3){}
    .list_desc p:nth-child(4){
        height:.13rem;
        line-height:.13rem;
    }
    .list_desc p:nth-child(3){
        font-size:.12rem;
    }
    .list_desc p:nth-child(4){
        i{
            color:#ff6743;
        }
    }
`