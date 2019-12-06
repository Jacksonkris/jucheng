import styled from "styled-components";


export const WalletContainer = styled.div`
    width:100%;
    height:100%;
    background:#f6f6f6;
    .head{
        width:100%;
        height:.36rem;
        position:fixed;
        top:0;
        left:0;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background:#fff;
        font-size:.16rem;
        z-index: 311;
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
    .wallet{
        width:100%;
        height:100%;
        padding-top:0.36rem;
        padding-bottom:0.38rem;
        overflow:auto;
        ul{
            width:100%;
            min-height:2rem;
            margin-top:0.1rem;
            li{
                width:100%;
                height:100%;
                background:#fff;
                margin-top:0.1rem;
                .info{
                    width:100%;
                    height:1.54rem;
                    padding:0.2rem 0.15rem 0.15rem;
                    .info_c{
                        width:100%;
                        height:100%;
                        display:flex;
                        justify-content:space-between;
                        .show_time{
                            width:2.31rem;
                            height:100%;
                            display:flex;
                            flex-direction:column;
                            padding-right:0.4rem;
                            p:nth-child(1){
                                font-size:0.13rem;
                                font-weight:700;
                                overflow:hidden;
                                text-overflow: ellipsis;
                                word-break: break-all;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                margin-top:0.1rem;
                            }
                            p:nth-child(2){
                                font-size:0.1rem;
                                margin-top:0.2rem;
                                color:#666;
                            }
                            p:nth-child(3){
                                font-size:0.1rem;
                                margin-top:0.1rem;
                                color:#666;
                            }
                        }
                        .show_pit{
                            width:0.6rem;
                            height:100%;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            img{
                                width:0.58rem;
                                height:0.77rem;
                            }
                        }
                    }
                }
                .info_p{
                    width:100%;
                    height:0.45rem;
                    padding:0.1rem 0.15rem;
                    border-top:1px solid #efefef;
                    display:flex;
                    justify-content:space-between;
                    .price{
                        width:40%;
                        span:nth-child(1){
                            font-size:0.14rem;
                            font-weight:700;
                        }
                        span:nth-child(2){
                            margin-left:0.04rem;
                            margin-right:0.04rem;
                            color:#666;
                        }
                        span:nth-child(3){
                            font-size:0.12rem;
                            color:#666;
                        }
                    }
                    .subit{
                        width:30%;
                        display:flex;
                        border:1px solid #ccc;
                        justify-content:center;
                        align-items:center;
                        .push{
                            width:30%;
                            border-right:1px solid #ccc;
                            text-align:center;
                        }
                        .inp{
                            width:40%;
                            text-align:center;
                        }
                        .reduce{
                            width:30%;
                            border-left:1px solid #ccc;
                            text-align:center;
                        }
                    }
                    .dell{
                        width:10%;
                        background:#ccc;
                        font-size:0.12rem;
                        text-align:center;
                        line-height:0.25rem;
                        border-radius:0.05rem;
                    }
                }
            }
        }
        
        
    }
    .bottom{
        width:100%;
        height:0.38rem;
        background:#fff;
        position:fixed;
        border-top:1px solid #efefef;
        bottom:0;
        left:0;
        font-size:0.12rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .intall{
            width:50%;
            height:100%;
            display:flex;
            flex-direction:column;
            background:#ff9a34;
            align-items:center;
            justify-content:center;
            color:#fff;
            .inspice{
                display:flex;
                font-size:0.14rem;
            }
        }
        
        .tall{
            color:#fff;
            font-size:0.14rem;
            width:50%;
            height:100%;
            text-align:center;
            line-height:0.38rem;
            background:#c30;
        }
    }
`