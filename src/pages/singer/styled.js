import styled from "styled-components";


export const ClassifyContainer = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index: 3;
    background:#f6f6f6;
    .head{
        width:100%;
        height:.36rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background:#fff;
        font-size:.16rem;
        .iconfont{
            width:15%;
            height:.36rem;
            line-height:.36rem;
            font-size:.2rem;
            text-align:center;
        }
        p{
            width:70%;
            height:.36rem;
            font-size:.16rem;
            line-height:.36rem;
            text-align:center;
        }
    }
    .nav{
        width:100%;
        height:.38rem;
        padding:.08rem .12rem;
        font-size:.12rem;
        display:flex;
        background:#fff;
        border-top:1px solid #e5e5e5;

        ul{
            width:2.38rem;
            height:100%;
            white-space: nowrap;
            overflow-x: scroll;
            display:flex;

            li{
                line-height:.22rem;
                padding:0 .042rem;
                margin-right:.12rem;
            }
            .click{
                border-bottom:1px solid #ff6700;
                color:#ff6700;
            }
        }
        ul::-webkit-scrollbar {
            display: none;
        }
        .city{
            display:flex;
            width:.6rem;
            height:.22rem;
            margin-left:.1rem;
            line-height:.22rem;
            justify-content:flex-end;

            i{
                margin-left:.05rem;
            }
        }
    
`