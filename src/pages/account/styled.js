import styled from "styled-components";

export const AccountContainer = styled.div`

    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#f6f6f6;

    .head{
        width:100%;
        height:.36rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background:#fff;

        .iconfont{
            width:15%；
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
    .gird1{
        width:100%;
        height:.86rem;
        padding:0 .13rem;
        font-size:.12rem;
        margin-top:.1rem;
        background:#fff;
        color:#666;

        .gird-title1,
        .gird-title2{
            width:100%;
            height:.5rem;
            border-bottom:1px solid #f1f1f1;
            display:flex;
            justify-content:space-between;
            align-items:center;

            img{
                width:.34rem;
                height:.34rem;
            }
        }
        .gird-title2{
            width:100%;
            height:.36rem;
            border:none;
        }
    }
    .gird2{
        width:100%;
        height:2.7rem;
        padding:0 .13rem;
        margin-top:.1rem;
        background:#fff;

        .gird-title{
            width:100%;
            height:.39rem;
            border-bottom:1px solid #f1f1f1;
            display:flex;
            justify-content:space-between;
            align-items:center;

            span{
                font-size:.12rem;
                color:#666; 
            }
        }
    }
    .btn-wrap{
        width:100%;
        height:.38rem;
        margin-top:.24rem;
        padding:0 .13rem;
        font-size:.14rem;

        P{
            width:100%;
            height:.38rem;
            text-align:center;
            line-height:.38rem;
            background:#fff;
            border-radius:.08rem;
        }
    }
    

`